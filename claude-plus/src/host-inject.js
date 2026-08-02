/* Claude Plus :: host 附加 payload（對話管理）
 *
 * 這段程式會被附加在官方 Claude Code 擴充 extension.js 的檔尾，
 * 在「官方擴充自己的行程」裡執行 —— 所以能用官方的 context.globalState
 * 合法讀寫 hiddenSessionIds（垃圾桶按鈕的隱藏黑名單），
 * 不必在 VS Code 執行中去碰 state.vscdb。
 *
 * 提供三件事：
 *   1. claudeCtzh.unhideSessions —— 復原誤刪：把選到的對話從黑名單移除，重回清單
 *   2. claudeCtzh.purgeSessions —— 真刪除：把選到的對話（jsonl＋file-history＋session-env）
 *      丟「資源回收筒」（可反悔），並同步從黑名單移除
 *   3. 開機時處理 ~/.claude/ctzh-pending-unhide.json —— 排隊等復原的 id 自動復原
 *
 * 全部包在 try/catch 裡：任何一步出錯都只會靜默跳過，絕不影響官方擴充本身。
 */
(function () {
  "use strict";
  try {
    var __orig = module.exports;
    if (!__orig || typeof __orig.activate !== "function" || __orig.__ctzhWrapped) return;

    function __ctzhSetup(context) {
      if (globalThis.__ctzhSessionsReady) return;
      globalThis.__ctzhSessionsReady = true;

      var vscode = require("vscode");
      var fs = require("fs");
      var os = require("os");
      var path = require("path");

      var configDir = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), ".claude");
      var projectsDir = path.join(configDir, "projects");

      /* ---- 設定同步：重骰後是否自動隱藏舊分身（給 fork 補丁讀的旗標） ---- */
      function syncFlag() {
        try {
          globalThis.__ctzhAutoHide = vscode.workspace
            .getConfiguration("claudeThinkingZh")
            .get("autoHideOnRewind", true);
        } catch (e) {
          globalThis.__ctzhAutoHide = true;
        }
      }
      syncFlag();
      try {
        context.subscriptions.push(
          vscode.workspace.onDidChangeConfiguration(function (e) {
            if (e.affectsConfiguration("claudeThinkingZh.autoHideOnRewind")) syncFlag();
          })
        );
      } catch (e) {}

      /* ---- 黑名單存取（官方 globalState） ---- */
      function getHidden() {
        return context.globalState.get("hiddenSessionIds") || [];
      }
      function setHidden(list) {
        return context.globalState.update("hiddenSessionIds", list);
      }

      /* ---- 掃描：黑名單裡的 id → 硬碟上的檔案 ---- */
      function currentProjectDirName() {
        try {
          var ws = vscode.workspace.workspaceFolders;
          if (ws && ws.length) return ws[0].uri.fsPath.replace(/[^a-zA-Z0-9]/g, "-");
        } catch (e) {}
        return null;
      }

      function collect() {
        var hidden = getHidden();
        var found = [];
        var zombies = [];
        var dirs = [];
        try {
          dirs = fs.readdirSync(projectsDir);
        } catch (e) {
          return { found: found, zombies: hidden.slice() };
        }
        var cur = currentProjectDirName();
        for (var i = 0; i < hidden.length; i++) {
          var id = hidden[i];
          var hit = null;
          for (var d = 0; d < dirs.length; d++) {
            var f = path.join(projectsDir, dirs[d], id + ".jsonl");
            try {
              var st = fs.statSync(f);
              hit = { id: id, file: f, project: dirs[d], mtime: st.mtimeMs, size: st.size, isCurrent: dirs[d] === cur };
              break;
            } catch (e) {}
          }
          if (hit) found.push(hit);
          else zombies.push(id);
        }
        found.sort(function (a, b) {
          if (a.isCurrent !== b.isCurrent) return a.isCurrent ? -1 : 1;
          return b.mtime - a.mtime;
        });
        return { found: found, zombies: zombies };
      }

      /* ---- 從 jsonl 開頭抓一句當標題 ---- */
      function titleOf(file) {
        try {
          var fd = fs.openSync(file, "r");
          var buf = Buffer.alloc(262144);
          var n = fs.readSync(fd, buf, 0, buf.length, 0);
          fs.closeSync(fd);
          var lines = buf.slice(0, n).toString("utf8").split("\n");
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.indexOf('"type":"user"') === -1) continue;
            var obj;
            try {
              obj = JSON.parse(line);
            } catch (e) {
              continue;
            }
            if (!obj || obj.type !== "user" || obj.isMeta) continue;
            var c = obj.message && obj.message.content;
            var t = "";
            if (typeof c === "string") t = c;
            else if (Array.isArray(c)) {
              for (var k = 0; k < c.length; k++) {
                var blk = c[k];
                if (blk && blk.type === "text" && typeof blk.text === "string") {
                  t = blk.text;
                  break;
                }
              }
            }
            t = (t || "").trim();
            if (!t || t.charAt(0) === "<" || t.indexOf("Caveat") === 0) continue;
            return t.replace(/\s+/g, " ").slice(0, 60);
          }
        } catch (e) {}
        return "（無標題）";
      }

      function fmtDate(ms) {
        var d = new Date(ms);
        function p(x) {
          return (x < 10 ? "0" : "") + x;
        }
        return d.getFullYear() + "/" + p(d.getMonth() + 1) + "/" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes());
      }
      function fmtSize(b) {
        if (b >= 1048576) return (b / 1048576).toFixed(1) + " MB";
        return Math.max(1, Math.round(b / 1024)) + " KB";
      }

      function toItems(found) {
        return found.map(function (e) {
          return {
            label: titleOf(e.file),
            description: fmtDate(e.mtime) + "・" + fmtSize(e.size) + (e.isCurrent ? "・本專案" : ""),
            detail: e.project,
            __entry: e
          };
        });
      }

      /* ---- 指令 1：復原誤刪 ---- */
      async function unhideSessions() {
        var col = collect();
        if (!col.found.length) {
          vscode.window.showInformationMessage("Claude Plus：沒有可復原的對話（黑名單是空的，或檔案已被清理）。");
          return;
        }
        var picked = await vscode.window.showQuickPick(toItems(col.found), {
          canPickMany: true,
          matchOnDescription: true,
          matchOnDetail: true,
          placeHolder: "勾選要「復原到清單」的對話（可多選），按 Enter 確定"
        });
        if (!picked || !picked.length) return;
        var ids = picked.map(function (p) {
          return p.__entry.id;
        });
        await setHidden(
          getHidden().filter(function (x) {
            return ids.indexOf(x) === -1;
          })
        );
        vscode.window.showInformationMessage("Claude Plus：已復原 " + ids.length + " 段對話。重新整理對話清單（或重開面板）即可看到。");
      }

      /* ---- 指令 2：真刪除（丟資源回收筒） ---- */
      async function purgeSessions() {
        var col = collect();
        if (!col.found.length && !col.zombies.length) {
          vscode.window.showInformationMessage("Claude Plus：黑名單是空的，沒有需要清理的對話。");
          return;
        }
        var picked = [];
        if (col.found.length) {
          picked = await vscode.window.showQuickPick(toItems(col.found), {
            canPickMany: true,
            matchOnDescription: true,
            matchOnDetail: true,
            placeHolder: "勾選要「真的刪除」的對話（丟資源回收筒，可反悔），按 Enter 確定"
          });
          if (picked === undefined) return; // 按 Esc 取消整個動作
          picked = picked || [];
        }
        if (!picked.length && !col.zombies.length) return;
        if (picked.length) {
          var go = await vscode.window.showWarningMessage(
            "確定要把 " + picked.length + " 段對話（連同其檔案歷史）移到資源回收筒嗎？",
            { modal: true, detail: "移到資源回收筒後仍可從回收筒還原。此動作也會把它們從黑名單移除。" },
            "移到資源回收筒"
          );
          if (go !== "移到資源回收筒") return;
        }
        var okIds = [];
        var failed = [];
        for (var i = 0; i < picked.length; i++) {
          var e = picked[i].__entry;
          try {
            await vscode.workspace.fs.delete(vscode.Uri.file(e.file), { useTrash: true });
            var extras = [path.join(configDir, "file-history", e.id), path.join(configDir, "session-env", e.id)];
            for (var k = 0; k < extras.length; k++) {
              try {
                if (fs.existsSync(extras[k]))
                  await vscode.workspace.fs.delete(vscode.Uri.file(extras[k]), { recursive: true, useTrash: true });
              } catch (e2) {}
            }
            okIds.push(e.id);
          } catch (err) {
            failed.push(picked[i].label);
          }
        }
        var remove = okIds.concat(col.zombies);
        await setHidden(
          getHidden().filter(function (x) {
            return remove.indexOf(x) === -1;
          })
        );
        var msg = "Claude Plus：已把 " + okIds.length + " 段對話移到資源回收筒。";
        if (col.zombies.length) msg += "（另外清掉 " + col.zombies.length + " 筆檔案早已不存在的失效記錄）";
        if (failed.length) msg += "　⚠ 有 " + failed.length + " 段失敗：" + failed.join("、");
        vscode.window.showInformationMessage(msg);
      }

      /* ---- 開機處理「排隊等復原」名單（例：誤刪的靈魂檔） ---- */
      function processPending() {
        try {
          var pf = path.join(configDir, "ctzh-pending-unhide.json");
          if (!fs.existsSync(pf)) return;
          var ids = JSON.parse(fs.readFileSync(pf, "utf8"));
          fs.unlinkSync(pf);
          if (!Array.isArray(ids) || !ids.length) return;
          var h = getHidden();
          var rest = h.filter(function (x) {
            return ids.indexOf(x) === -1;
          });
          var n = h.length - rest.length;
          if (n > 0) {
            Promise.resolve(setHidden(rest)).then(function () {
              vscode.window.showInformationMessage("Claude Plus：已自動復原 " + n + " 段先前誤刪的對話（重新整理清單即可看到）。");
            });
          }
        } catch (e) {}
      }

      try {
        context.subscriptions.push(vscode.commands.registerCommand("claudeCtzh.unhideSessions", unhideSessions));
        context.subscriptions.push(vscode.commands.registerCommand("claudeCtzh.purgeSessions", purgeSessions));
      } catch (e) {}
      processPending();
    }

    module.exports = {
      __ctzhWrapped: true,
      activate: async function (context) {
        var r;
        try {
          r = await __orig.activate.apply(this, arguments);
        } finally {
          try {
            __ctzhSetup(context);
          } catch (e) {}
        }
        return r;
      },
      deactivate: function () {
        if (__orig.deactivate) return __orig.deactivate.apply(this, arguments);
      }
    };
  } catch (e) {}
})();
