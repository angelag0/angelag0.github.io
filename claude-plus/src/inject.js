/* claude-thinking-zh :: webview payload
 * 注入到 Claude Code 的 webview/index.js 尾端。
 * 只依賴 DOM 結構（<details> + class 含 thinking），不依賴任何壓縮後的識別字，
 * 因此 Claude Code 改版後多半仍然有效。
 */
(function () {
  "use strict";

  if (window.__CTZH_LOADED__) return;
  window.__CTZH_LOADED__ = true;

  // 修補時由 extension.js 以實際設定值取代
  var CFG = __CTZH_CONFIG__;

  var LABEL_IDLE = "譯";
  var LABEL_BUSY = "…";
  var LABEL_BACK = "原";
  var LABEL_FAIL = "✕";
  var LABEL_BLOCKED = "⚠";
  var MAX_CHUNK = 1200; // 單次請求的字元上限，避免 URL 過長
  var MAX_RETRY = 2; // 遇到 429／5xx 的重試次數
  var RETRY_BASE = 700; // 重試間隔（毫秒），逐次加倍

  var RELOAD_HINT =
    "翻譯還沒生效：CSP 修補要重新載入視窗才算數。" +
    "請按 Ctrl+Shift+P，執行 Developer: Reload Window，再回來按一次。";

  /* ---------- CSP 自檢 ----------
   * CSP 寫在 Claude Code 的 extension.js 裡，而那個檔案是擴充主機啟動時就讀進
   * 記憶體的。所以「這次開機才補上的 CSP」對正在跑的視窗無效，fetch 一定被擋。
   * 直接讀 <meta> 就知道現在這個 webview 到底有沒有放行，不必等失敗才發現。
   */
  var CSP_OK = (function () {
    try {
      var meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!meta) return true; // 沒有 CSP 就不會被擋
      var c = meta.getAttribute("content") || "";
      if (c.indexOf("translate.googleapis.com") !== -1) return true;
      // 既沒 connect-src 也沒 default-src，才算真的沒限制
      if (c.indexOf("connect-src") === -1 && c.indexOf("default-src") === -1) return true;
      return false;
    } catch (e) {
      return true;
    }
  })();

  var seen = new WeakSet();      // 已處理過的 <details>
  var originals = new WeakMap(); // contentEl -> [{ node, value }]

  /* ---------- 判斷與尋找 ---------- */

  function contentOf(details) {
    return details.querySelector('div[class*="thinkingContent"]');
  }

  function isThinkingBlock(el) {
    return (
      el.tagName === "DETAILS" &&
      typeof el.className === "string" &&
      el.className.indexOf("thinking") !== -1 &&
      contentOf(el) !== null
    );
  }

  // 串流中的區塊會不斷 re-render，翻譯會被蓋掉，所以先擋著
  function isStreaming(details) {
    var s = details.querySelector("summary");
    return !!s && /Thinking\s*\.\.\./.test(s.textContent || "");
  }

  /* ---------- 取出可翻譯的文字節點 ---------- */

  var SKIP_TAGS = { CODE: 1, PRE: 1, KBD: 1, SAMP: 1, SCRIPT: 1, STYLE: 1 };

  function collectTextNodes(root) {
    var out = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var v = n.nodeValue;
        if (!v || !v.trim()) return NodeFilter.FILTER_REJECT;
        // 沒有拉丁字母的（純數字、標點、已是中文）不用送出去
        if (!/[A-Za-z]/.test(v)) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        while (p && p !== root) {
          if (SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT;
          p = p.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) out.push(n);
    return out;
  }

  // 保留原本的前後空白，否則行內 <code> 前後的字會黏在一起
  function split(raw) {
    var lead = /^\s*/.exec(raw)[0];
    var trail = /\s*$/.exec(raw)[0];
    var core = raw.slice(lead.length, raw.length - trail.length);
    return { lead: lead, core: core.replace(/\s+/g, " "), trail: trail };
  }

  /* ---------- Google 翻譯 ---------- */

  function sleep(ms) {
    return new Promise(function (r) {
      setTimeout(r, ms);
    });
  }

  function isRetryable(err) {
    return /^HTTP (429|5\d\d)$/.test(String((err && err.message) || ""));
  }

  // fetch 被 CSP 擋下或斷網都會丟 TypeError，這種重試沒有意義
  function isNetworkError(err) {
    return (
      err instanceof TypeError || /Failed to fetch|NetworkError|network error/i.test(String((err && err.message) || ""))
    );
  }

  function gtranslate(text, attempt) {
    attempt = attempt || 0;
    var url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
      encodeURIComponent(CFG.lang) +
      "&dt=t&q=" +
      encodeURIComponent(text);
    return fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (j) {
        var s = "";
        var segs = j && j[0] ? j[0] : [];
        for (var i = 0; i < segs.length; i++) {
          if (segs[i] && typeof segs[i][0] === "string") s += segs[i][0];
        }
        return s;
      })
      .catch(function (err) {
        // 429 是免費端點的限流，隔一下通常就過了；5xx 同理
        if (isRetryable(err) && attempt < MAX_RETRY) {
          return sleep(RETRY_BASE * (attempt + 1)).then(function () {
            return gtranslate(text, attempt + 1);
          });
        }
        throw err;
      });
  }

  // 多行合併成一次請求；換行在翻譯後會保留，所以可以再切回來。
  // 行數對不上、或整批請求失敗，都退回逐行翻譯，寧可慢也不要整篇放棄。
  function translateLines(lines) {
    var chunks = [];
    var cur = [];
    var len = 0;
    for (var i = 0; i < lines.length; i++) {
      var add = lines[i].length + 1;
      if (cur.length && len + add > MAX_CHUNK) {
        chunks.push(cur);
        cur = [];
        len = 0;
      }
      cur.push(lines[i]);
      len += add;
    }
    if (cur.length) chunks.push(cur);

    var results = [];
    var okCount = 0; // 真的翻成功幾行，全掛的話要當成失敗而不是假裝成功
    var lastError = null;

    function perLine(chunk) {
      return chunk.reduce(function (p, line) {
        return p.then(function () {
          return gtranslate(line).then(
            function (t) {
              results.push(t.replace(/\n/g, " "));
              okCount++;
            },
            function (err) {
              lastError = err;
              results.push(line); // 失敗就留原文
            }
          );
        });
      }, Promise.resolve());
    }

    return chunks
      .reduce(function (p, chunk) {
        return p.then(function () {
          return gtranslate(chunk.join("\n")).then(
            function (out) {
              var parts = out.split("\n");
              if (parts.length === chunk.length) {
                results = results.concat(parts);
                okCount += parts.length;
                return;
              }
              return perLine(chunk); // 行數對不上就逐行來，避免整段錯位
            },
            function (err) {
              lastError = err;
              if (isNetworkError(err)) throw err; // 連不出去，逐行也是白費
              return perLine(chunk);
            }
          );
        });
      }, Promise.resolve())
      .then(function () {
        if (!okCount) throw lastError || new Error("翻譯全部失敗");
        return results;
      });
  }

  /* ---------- 切換翻譯 ---------- */

  function idle(btn) {
    btn.textContent = LABEL_IDLE;
    btn.title = "翻譯成中文";
  }

  function toRestore(contentEl, btn) {
    var saved = originals.get(contentEl);
    if (saved) {
      for (var i = 0; i < saved.length; i++) {
        if (saved[i].node.isConnected) saved[i].node.nodeValue = saved[i].value;
      }
      originals.delete(contentEl);
    }
    idle(btn);
  }

  function toTranslate(contentEl, btn) {
    var nodes = collectTextNodes(contentEl);
    if (!nodes.length) {
      idle(btn);
      return;
    }

    var saved = [];
    var pieces = [];
    for (var i = 0; i < nodes.length; i++) {
      saved.push({ node: nodes[i], value: nodes[i].nodeValue });
      pieces.push(split(nodes[i].nodeValue));
    }

    btn.textContent = LABEL_BUSY;
    btn.disabled = true;

    translateLines(
      pieces.map(function (p) {
        return p.core;
      })
    )
      .then(function (translated) {
        for (var i = 0; i < nodes.length; i++) {
          if (!nodes[i].isConnected) continue;
          var t = translated[i];
          if (typeof t !== "string" || !t) continue;
          nodes[i].nodeValue = pieces[i].lead + t + pieces[i].trail;
        }
        originals.set(contentEl, saved);
        btn.textContent = LABEL_BACK;
        btn.title = "還原英文原文";
      })
      .catch(function (err) {
        var msg = String((err && err.message) || err);
        console.error("[claude-thinking-zh] 翻譯失敗:", err);
        if (isNetworkError(err)) {
          // 這一類幾乎都是 CSP 沒生效，其次才是真的斷網
          btn.textContent = LABEL_BLOCKED;
          btn.title = CSP_OK ? "連不上翻譯服務，請檢查網路連線。（" + msg + "）" : RELOAD_HINT;
        } else {
          btn.textContent = LABEL_FAIL;
          btn.title = "翻譯失敗：" + msg + "（HTTP 429 代表 Google 免費端點限流，等一下再試）";
        }
        setTimeout(function () {
          idle(btn);
        }, 6000);
      })
      .then(function () {
        btn.disabled = false;
      });
  }

  /* ---------- 按鈕 ---------- */

  function makeButton(details) {
    var btn = document.createElement("button");
    btn.className = "ctzh-btn";
    btn.type = "button";
    if (CSP_OK) {
      idle(btn);
    } else {
      btn.textContent = LABEL_BLOCKED;
      btn.title = RELOAD_HINT;
    }
    btn.style.cssText = [
      "margin-left:8px",
      "padding:0 6px",
      "font-size:11px",
      "line-height:16px",
      "height:16px",
      "border-radius:3px",
      "cursor:pointer",
      "opacity:.75",
      "border:1px solid var(--vscode-contrastBorder,transparent)",
      "background:var(--vscode-button-secondaryBackground,rgba(128,128,128,.22))",
      "color:var(--vscode-button-secondaryForeground,inherit)"
    ].join(";");

    btn.addEventListener("mouseenter", function () {
      btn.style.opacity = "1";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.opacity = ".75";
    });

    // 按鈕在 <summary> 裡面，不擋掉的話會順便收合區塊
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (btn.disabled) return;

      // 白按也沒用，直接把原因說清楚
      if (!CSP_OK) {
        btn.textContent = LABEL_BLOCKED;
        btn.title = RELOAD_HINT;
        console.warn("[claude-thinking-zh] " + RELOAD_HINT);
        return;
      }

      var contentEl = contentOf(details);
      if (!contentEl) return;

      if (isStreaming(details)) {
        btn.title = "還在思考中，等結束再翻";
        return;
      }

      if (originals.has(contentEl)) toRestore(contentEl, btn);
      else toTranslate(contentEl, btn);
    });

    return btn;
  }

  /* ---------- 掃描 ---------- */

  function handle(details) {
    var summary = details.querySelector("summary");
    if (summary && !summary.querySelector(".ctzh-btn")) {
      summary.appendChild(makeButton(details));
    }

    if (seen.has(details)) return;
    seen.add(details);

    // 只在第一次看到時自動展開；之後使用者手動收合就尊重他的選擇
    if (CFG.autoExpand && !details.open) {
      try {
        details.open = true; // 觸發 toggle 事件 → 打到元件自己的 onToggle
      } catch (e) {
        /* ignore */
      }
    }
  }

  function scan() {
    var list = document.querySelectorAll('details[class*="thinking"]');
    for (var i = 0; i < list.length; i++) {
      if (isThinkingBlock(list[i])) handle(list[i]);
    }
  }

  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(function () {
      pending = false;
      try {
        scan();
      } catch (e) {
        console.error("[claude-thinking-zh] scan 失敗:", e);
      }
    }, 120);
  }

  function boot() {
    scan();
    new MutationObserver(schedule).observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    console.log("[claude-thinking-zh] 已啟用", CFG);
    if (!CSP_OK) console.warn("[claude-thinking-zh] " + RELOAD_HINT);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
