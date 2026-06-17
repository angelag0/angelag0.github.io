# ASTRA Landing（正體中文）

taiwantrade ASTRA 產品介紹頁。靜態網站，可直接部署。

## 內容
- `index.html` — 首頁
- `support.js` — 頁面執行所需的 runtime
- `ds/` — taiwantrade ASTRA 設計系統（樣式、字型、元件）
- `assets/` — 圖片、圖示、輪播截圖、影片
- `.nojekyll` — 讓 GitHub Pages 原樣提供所有檔案

## 本機預覽
不能直接雙擊開啟 `index.html`（瀏覽器會擋住本機檔案讀取）。請用簡易伺服器：

```bash
cd dist
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 部署到 GitHub Pages
1. 把這個資料夾的內容（含 `index.html`）推到 repo。
2. Settings → Pages → Source 選擇該分支與資料夾根目錄。
3. 等候發佈後即可瀏覽。

> 需要連線：React／Babel 由公開 CDN 載入，部分功能示意影片來自外部來源；其餘資源皆為本地相對路徑。
