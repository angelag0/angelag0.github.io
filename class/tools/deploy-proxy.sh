#!/bin/bash
# ============================================================
#  課程小幫手 - 中繼站部署腳本（在 Google Cloud Shell 執行）
#
#  在職訓練網封鎖 GitHub 機房的 IP，導致雲端自動更新抓不到課程詳細頁。
#  這支腳本會在 Google 的台灣機房（asia-east1）部署一個小服務代抓，
#  自動更新就能拿到完整資料，任何電腦都不必安裝東西。
#
#  用法：curl -s https://angelag0.github.io/class/tools/deploy-proxy.sh | bash
# ============================================================
set -e

PROJECT="${OJT_PROJECT:-carnivaltaiwan}"
REGION="asia-east1"          # 台灣彰化
SERVICE="ojt-proxy"
WORKDIR="$HOME/ojt-proxy"

echo "============================================"
echo "  課程小幫手 中繼站部署"
echo "  專案：$PROJECT"
echo "  機房：$REGION（台灣彰化）"
echo "============================================"
echo

# 秘密路徑：讓別人就算知道網址也叫不動這個服務
KEY="$(head -c 32 /dev/urandom | base64 | tr -dc 'a-zA-Z0-9' | head -c 16)"

mkdir -p "$WORKDIR" && cd "$WORKDIR"

cat > package.json <<'PKG'
{
  "name": "ojt-proxy",
  "version": "1.0.0",
  "private": true,
  "main": "index.js",
  "engines": { "node": ">=20" }
}
PKG

cat > index.js <<'SRC'
/*
 * 只做一件事：把「在職訓練網的課程詳細頁」原封不動轉回去。
 * 不是開放代理 —— 目標網址寫死，課程代碼只收數字，路徑要對得上秘密字串。
 */
const http = require('http');
const https = require('https');

const PORT = process.env.PORT || 8080;
const KEY = process.env.PROXY_KEY || '';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36';

http.createServer((req, res) => {
  const u = new URL(req.url, 'http://localhost');

  if (KEY && !u.pathname.startsWith('/' + KEY)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('not found');
  }
  if (u.pathname.endsWith('/health')) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }

  const ocid = (u.searchParams.get('ocid') || '').replace(/\D/g, '');
  if (!ocid || ocid.length > 10) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('need numeric ocid');
  }

  const target = `https://ojt.wda.gov.tw/ClassSearch/Detail?PlanType=1&OCID=${ocid}`;
  const upstream = https.get(target, { headers: { 'User-Agent': UA }, timeout: 30000 }, r => {
    res.writeHead(r.statusCode, { 'Content-Type': 'text/html; charset=utf-8' });
    r.pipe(res);
  });
  upstream.on('timeout', () => upstream.destroy(new Error('upstream timeout')));
  upstream.on('error', err => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('upstream error: ' + err.message);
  });
}).listen(PORT, () => console.log('listening on ' + PORT));
SRC

echo "[1/3] 啟用需要的 Google 服務（第一次會久一點）…"
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com \
  --project "$PROJECT" --quiet

echo
echo "[2/3] 部署到台灣機房…"
gcloud run deploy "$SERVICE" \
  --source . \
  --region "$REGION" \
  --project "$PROJECT" \
  --allow-unauthenticated \
  --set-env-vars "PROXY_KEY=$KEY" \
  --memory 256Mi \
  --max-instances 2 \
  --quiet

URL="$(gcloud run services describe "$SERVICE" --region "$REGION" --project "$PROJECT" --format='value(status.url)')"
PROXY="$URL/$KEY"

echo
echo "[3/3] 測試能不能抓到課程（用一堂真實的課）…"
CODE="$(curl -s -o /tmp/ojt-test.html -w '%{http_code}' "$PROXY/?ocid=173853")"
echo "      HTTP 狀態：$CODE"

if [ "$CODE" = "200" ] && grep -q "報名日期" /tmp/ojt-test.html; then
  RESULT="成功"
else
  RESULT="失敗"
fi

echo
echo "============================================"
echo "  測試結果：$RESULT"
echo
echo "  把下面這一行整行複製給 Claude："
echo
echo "  $PROXY"
echo
echo "============================================"
if [ "$RESULT" = "失敗" ]; then
  echo "  抓不到的話，代表台灣機房的 IP 也被擋了。"
  echo "  把上面整段訊息截圖給 Claude 看。"
  head -c 300 /tmp/ojt-test.html
fi
