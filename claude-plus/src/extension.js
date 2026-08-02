/* Claude Plus :: VS Code 擴充本體  v2.0.0
 *
 * 職責：找到已安裝的 Claude Code 擴充，套三種修補：
 *   1. webview payload —— 思考區塊展開＋一鍵中譯（1.x 既有功能）
 *   2. CSP 放行 —— 讓翻譯請求出得去（1.x 既有功能）
 *   3. host 對話管理 —— 在官方 extension.js 檔尾附加 host-inject.js
 *      （復原誤刪／真刪除指令），並精準替換 fork 分支加上「重骰後自動隱藏舊分身」。
 * Claude Code 每次更新都會裝到新資料夾、修補自然消失，所以每次啟動都檢查一次。
 */

const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

const TARGET_IDS = ["Anthropic.claude-code", "anthropic.claude-code"];
const MARKER = "/*__CLAUDE_THINKING_ZH__*/";
const TRANSLATE_HOST = "https://translate.googleapis.com";
const CSP_NEEDLE = "default-src 'none';";
const CSP_PATCHED = "default-src 'none'; connect-src " + TRANSLATE_HOST + ";";
const BACKUP_SUFFIX = ".ctzh-orig";

// --- 對話管理補丁 ---
const HOST_MARKER = "/*__CTZH_SESSIONS__*/";
const AUTOHIDE_MARKER = "/*__CTZH_AUTOHIDE__*/";
// fork（Rewind 重骰）處理分支的原文。一字不差才動手，對不上就優雅跳過（優雅降級）。
const FORK_ANCHOR =
  'case"fork_conversation":return{type:"fork_conversation_response",sessionId:await(await li.load(this.cwd,this.logger)).forkSession(e.request.forkedFromSession,e.request.resumeSessionAt)};';
const FORK_REPLACEMENT =
  'case"fork_conversation":{let __ctzhSid=await(await li.load(this.cwd,this.logger)).forkSession(e.request.forkedFromSession,e.request.resumeSessionAt);if(globalThis.__ctzhAutoHide!==false){try{await this.settings.hideSession(e.request.forkedFromSession)}catch(__e){}}return{type:"fork_conversation_response",sessionId:__ctzhSid}}' +
  AUTOHIDE_MARKER +
  ";";

let output;

function log(msg) {
  if (output) output.appendLine(`[${new Date().toISOString()}] ${msg}`);
}

/* ---------- 定位 Claude Code ---------- */

// 版號要用數值比。字串排序會把 2.1.100 排在 2.1.99 前面，將來版號進位就會挑錯。
function versionOf(dirName) {
  const m = /^anthropic\.claude-code-(\d+)\.(\d+)\.(\d+)/i.exec(dirName);
  return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : [-1, -1, -1];
}

function compareVersion(a, b) {
  const va = versionOf(a);
  const vb = versionOf(b);
  for (let i = 0; i < 3; i++) {
    if (va[i] !== vb[i]) return va[i] - vb[i];
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

function findClaudeCode(context) {
  for (const id of TARGET_IDS) {
    const ext = vscode.extensions.getExtension(id);
    if (ext && ext.extensionPath) return ext.extensionPath;
  }

  // API 找不到（停用中之類）就直接翻擴充資料夾，挑版本最新的
  try {
    const root = path.dirname(context.extensionPath);
    const hits = fs
      .readdirSync(root)
      .filter((d) => /^anthropic\.claude-code-/i.test(d))
      .filter((d) => fs.existsSync(path.join(root, d, "webview", "index.js")))
      .sort(compareVersion)
      .map((d) => path.join(root, d));
    if (hits.length) return hits[hits.length - 1];
  } catch (e) {
    log("掃描擴充資料夾失敗: " + e.message);
  }
  return null;
}

function targetFiles(dir) {
  return {
    webview: path.join(dir, "webview", "index.js"),
    host: path.join(dir, "extension.js")
  };
}

/* ---------- 備份 ---------- */

function backupOnce(file) {
  const bak = file + BACKUP_SUFFIX;
  if (!fs.existsSync(bak)) fs.copyFileSync(file, bak);
  return bak;
}

/* ---------- 修補 ---------- */

function buildPayload(context) {
  const cfg = vscode.workspace.getConfiguration("claudeThinkingZh");
  const injectPath = path.join(context.extensionPath, "inject.js");
  const src = fs.readFileSync(injectPath, "utf8");
  const config = {
    lang: cfg.get("targetLang", "zh-TW"),
    autoExpand: cfg.get("autoExpand", true)
  };
  return src.replace("__CTZH_CONFIG__", JSON.stringify(config));
}

function buildHostPayload(context) {
  // host-inject.js 不吃設定值（執行期自己讀），原樣附加即可
  return fs.readFileSync(path.join(context.extensionPath, "host-inject.js"), "utf8");
}

function applyPatch(context) {
  const dir = findClaudeCode(context);
  if (!dir) {
    return { ok: false, changed: false, cspChanged: false, msg: "找不到已安裝的 Claude Code 擴充。" };
  }

  const files = targetFiles(dir);
  if (!fs.existsSync(files.webview) || !fs.existsSync(files.host)) {
    return {
      ok: false,
      changed: false,
      cspChanged: false,
      msg: "Claude Code 的檔案結構跟預期不符，可能是版本差異太大。"
    };
  }

  let changed = false;
  let cspChanged = false;
  let autoHideSkipped = false;

  try {
    const wvBuf = fs.readFileSync(files.webview);
    let hostSrc = fs.readFileSync(files.host, "utf8");

    const needWebview = wvBuf.indexOf(MARKER) === -1;
    const needCsp = hostSrc.indexOf(TRANSLATE_HOST) === -1;
    const needHostAppend = hostSrc.indexOf(HOST_MARKER) === -1;
    const needAutoHide = hostSrc.indexOf(AUTOHIDE_MARKER) === -1;

    // 兩處都先驗過再動手。只補 webview 而 CSP 沒補，結果是自動展開有效、
    // 翻譯永遠失敗，而且從畫面上看不出原因 —— 這種半套狀態比完全沒補更難查。
    if (needCsp && hostSrc.indexOf(CSP_NEEDLE) === -1) {
      return {
        ok: false,
        changed: false,
        cspChanged: false,
        msg: `在 ${path.basename(dir)} 找不到 CSP 宣告，為了避免只補一半，這次整個略過。請回報這個版本號。`
      };
    }

    if (needWebview) {
      // 用 Buffer 串接，避免 4.8MB 原檔被重新編碼
      backupOnce(files.webview);
      const payload = "\n;" + MARKER + "\n" + buildPayload(context) + "\n";
      fs.writeFileSync(files.webview, Buffer.concat([wvBuf, Buffer.from(payload, "utf8")]));
      changed = true;
      log("已注入 webview payload → " + files.webview);
    }

    // host（extension.js）的三種修補一次讀改寫，只寫檔一次
    if (needCsp || needHostAppend || needAutoHide) {
      backupOnce(files.host);

      if (needCsp) {
        // 原本完全沒有 connect-src，所以直接補一條不會跟現有規則衝突
        hostSrc = hostSrc.split(CSP_NEEDLE).join(CSP_PATCHED);
        cspChanged = true;
        log("已放行 CSP connect-src");
      }

      if (needAutoHide) {
        if (hostSrc.indexOf(FORK_ANCHOR) !== -1) {
          hostSrc = hostSrc.replace(FORK_ANCHOR, FORK_REPLACEMENT);
          log("已加上「重骰後自動隱藏舊分身」補丁");
        } else {
          autoHideSkipped = true;
          log("⚠ 此版本的 fork 程式碼對不上錨點，自動隱藏補丁跳過（其餘功能不受影響）");
        }
      }

      if (needHostAppend) {
        hostSrc = hostSrc + "\n;" + HOST_MARKER + "\n" + buildHostPayload(context) + "\n";
        log("已附加對話管理 payload（復原／清理指令）");
      }

      fs.writeFileSync(files.host, hostSrc, "utf8");
      changed = true;
    }
  } catch (e) {
    log("修補失敗: " + e.stack);
    return { ok: false, changed, cspChanged, msg: "修補失敗：" + e.message };
  }

  return {
    ok: true,
    changed,
    cspChanged,
    autoHideSkipped,
    dir,
    msg: changed ? "修補完成，重新載入視窗後生效。" : "已是最新狀態，不需要修補。"
  };
}

// webviewOnly：只還原 webview payload。改設定時用得到 —— host 補丁的內容跟這些設定無關，
// 沒必要重寫，重寫了反而要再逼使用者重新載入一次視窗。
function removePatch(context, { webviewOnly } = {}) {
  const dir = findClaudeCode(context);
  if (!dir) return { ok: false, msg: "找不到 Claude Code 擴充。" };

  const files = targetFiles(dir);
  const list = webviewOnly ? [files.webview] : [files.webview, files.host];
  let restored = 0;
  for (const f of list) {
    const bak = f + BACKUP_SUFFIX;
    if (fs.existsSync(bak)) {
      fs.copyFileSync(bak, f);
      fs.unlinkSync(bak);
      restored++;
    }
  }
  log(`還原 ${restored} 個檔案`);
  return {
    ok: true,
    restored,
    msg: restored ? `已還原 ${restored} 個檔案，重新載入視窗後生效。` : "沒有找到備份，可能本來就沒修補過。"
  };
}

/* ---------- 提示重新載入 ---------- */

async function promptReload(msg, detail) {
  // host 補丁（CSP／對話管理）都寫在 Claude Code 的 extension.js 裡，
  // 那個檔案是擴充主機啟動時就讀進記憶體的 ——「這次開機才補上的」對現在這個視窗必定無效。
  // 這種情況用一般通知太容易被忽略，改用強制對話框。
  const opts = detail ? { modal: true, detail } : {};
  const pick = await vscode.window.showInformationMessage(msg, opts, "重新載入視窗");
  if (pick === "重新載入視窗") {
    vscode.commands.executeCommand("workbench.action.reloadWindow");
  }
}

/* ---------- 對話管理按鈕（呼叫 host 補丁註冊的指令） ---------- */

async function runHostCommand(context, cmd) {
  try {
    await vscode.commands.executeCommand(cmd);
  } catch (e) {
    // 指令不存在＝補丁還沒生效（沒套用或還沒重新載入）
    const r = applyPatch(context);
    if (!r.ok) {
      vscode.window.showErrorMessage("Claude Plus：" + r.msg);
      return;
    }
    await promptReload(
      "Claude Plus：對話管理功能需要重新載入視窗一次才會生效。",
      r.changed ? "剛剛已重新套用修補，重新載入後就能使用「復原／清理對話」。" : "修補已在檔案裡，但目前視窗還沒載入它，重新載入即可。"
    );
  }
}

/* ---------- 進入點 ---------- */

function activate(context) {
  output = vscode.window.createOutputChannel("Claude Plus");
  context.subscriptions.push(output);

  context.subscriptions.push(
    vscode.commands.registerCommand("claudeThinkingZh.patch", async () => {
      const r = applyPatch(context);
      if (!r.ok) vscode.window.showErrorMessage("Claude Plus：" + r.msg);
      else if (r.changed) {
        await promptReload(
          "Claude Plus：" + r.msg,
          r.cspChanged ? "翻譯功能需要重新載入視窗才會生效，否則按下去只會顯示 ⚠。" : undefined
        );
      } else vscode.window.showInformationMessage("Claude Plus：" + r.msg);
    }),

    vscode.commands.registerCommand("claudeThinkingZh.restore", async () => {
      const r = removePatch(context);
      if (!r.ok) vscode.window.showErrorMessage("Claude Plus：" + r.msg);
      else await promptReload("Claude Plus：" + r.msg);
    }),

    vscode.commands.registerCommand("claudeThinkingZh.status", () => {
      const dir = findClaudeCode(context);
      if (!dir) {
        vscode.window.showWarningMessage("Claude Plus：找不到 Claude Code 擴充。");
        return;
      }
      const files = targetFiles(dir);
      const hostSrc = fs.existsSync(files.host) ? fs.readFileSync(files.host, "utf8") : "";
      const wv = fs.existsSync(files.webview) && fs.readFileSync(files.webview).indexOf(MARKER) !== -1;
      const csp = hostSrc.indexOf(TRANSLATE_HOST) !== -1;
      const sess = hostSrc.indexOf(HOST_MARKER) !== -1;
      const autoHide = hostSrc.indexOf(AUTOHIDE_MARKER) !== -1;
      const lines = [
        "目標：" + dir,
        "webview 注入（思考展開＋翻譯）：" + (wv ? "已套用" : "未套用"),
        "CSP 放行（翻譯連線）：" + (csp ? "已套用" : "未套用"),
        "對話管理（復原／清理指令）：" + (sess ? "已套用" : "未套用"),
        "重骰自動隱藏舊分身：" + (autoHide ? "已套用" : "未套用（版本不相容時會自動跳過，不影響其他功能）"),
        "備註：host 補丁是 VS Code 啟動時讀進記憶體的，剛補上的話要重新載入視窗才算生效。"
      ];
      log(lines.join("\n"));
      output.show(true);
      vscode.window.showInformationMessage(
        "Claude Plus：" + (wv && csp && sess ? "運作中" + (autoHide ? "" : "（自動隱藏未套用）") : "尚未完成修補")
      );
    }),

    vscode.commands.registerCommand("claudeThinkingZh.unhide", () => runHostCommand(context, "claudeCtzh.unhideSessions")),
    vscode.commands.registerCommand("claudeThinkingZh.purge", () => runHostCommand(context, "claudeCtzh.purgeSessions"))
  );

  // 狀態列兩顆按鈕：復原誤刪、真刪除
  const sbUnhide = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 8);
  sbUnhide.text = "♻️ 復原對話";
  sbUnhide.tooltip = "把誤按垃圾桶「刪掉」的 Claude 對話放回清單（垃圾桶其實只是隱藏）";
  sbUnhide.command = "claudeThinkingZh.unhide";
  sbUnhide.show();
  const sbPurge = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 7);
  sbPurge.text = "🧹 清理對話";
  sbPurge.tooltip = "把按過垃圾桶的 Claude 對話「真的刪除」（移到資源回收筒，可反悔）";
  sbPurge.command = "claudeThinkingZh.purge";
  sbPurge.show();
  context.subscriptions.push(sbUnhide, sbPurge);

  // 只有翻譯相關設定改了才需要重補 webview（設定值是在修補時寫進 payload 的）。
  // autoHideOnRewind 是 host payload 執行期自己讀的，不用重補。
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(async (e) => {
      if (
        !e.affectsConfiguration("claudeThinkingZh.targetLang") &&
        !e.affectsConfiguration("claudeThinkingZh.autoExpand")
      )
        return;
      removePatch(context, { webviewOnly: true });
      const r = applyPatch(context);
      if (r.ok && r.changed) await promptReload("Claude Plus：設定已更新，重新載入視窗後生效。");
    })
  );

  const cfg = vscode.workspace.getConfiguration("claudeThinkingZh");
  if (cfg.get("autoPatchOnStartup", true)) {
    const r = applyPatch(context);
    log(r.msg);
    if (r.ok && r.changed) {
      promptReload(
        "Claude Plus：偵測到 Claude Code 是新裝或剛更新，已重新套用修補。",
        "host 補丁（翻譯連線／對話管理）是 VS Code 啟動後才寫入的，對目前這個視窗還沒生效。\n" +
          "不重新載入的話，翻譯按鈕會顯示 ⚠、「復原／清理對話」按鈕也還不能用。"
      );
    } else if (!r.ok) {
      vscode.window.showWarningMessage("Claude Plus：" + r.msg);
    }
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
