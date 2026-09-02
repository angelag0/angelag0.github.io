/*
 * 課程小幫手：自動抓取「產業人才投資方案」臺北市課程
 *
 * 資料來源兩個，互補：
 *   1. 政府資料開放平臺 dataset 59296（每月 20 日晚上更新）→ 課程清單、名稱、時數、起訖日
 *   2. 在職訓練網課程詳細頁（可直接 GET）→ 報名起訖日、上課星期
 *      星期是從逐堂課表的「115/09/02(星期三)」反推，比「上課時間」那行文字可靠：
 *      文字可能寫成「每週一18:50~21:50 (其中9/21不排課)、每週三…」，難以穩定剖析。
 *
 * 輸出 class/courses.json，欄位刻意與原本寫死在頁面裡的一致，不多存用不到的資料。
 * 用法：node fetch-courses.js
 *
 * ⚠ 在職訓練網會擋掉國外機房的請求（GitHub Actions 抓詳細頁一律回 504），
 *   所以這支程式把已經抓過的報名日與星期當成快取沿用（課程公告後這兩項不會變），
 *   只對「沒看過的新課程」去抓詳細頁。抓不到就標成 pending，頁面照樣列出，
 *   等在台灣的電腦跑一次（tools\更新課程.bat）就會補齊。
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const DATASET_API = 'https://data.gov.tw/api/v2/rest/dataset/59296';
const DETAIL_URL = id => `https://ojt.wda.gov.tw/ClassSearch/Detail?PlanType=1&OCID=${id}`;
const CITY = '臺北市';
const OUT = path.join(__dirname, '..', 'courses.json');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36';
const GAP_MS = 400;      // 每筆之間的間隔，避免對政府網站造成負擔
const MAX_RETRY = 2;
const MISS_LIMIT = 5;    // 詳細頁連續失敗幾筆就放棄（IP 被擋時避免空轉）

function get(url, retry = MAX_RETRY) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': UA }, timeout: 30000 }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return resolve(get(res.headers.location, retry));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return retry > 0
          ? setTimeout(() => resolve(get(url, retry - 1)), 1500)
          : reject(new Error(`HTTP ${res.statusCode} ${url}`));
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', c => body += c);
      res.on('end', () => resolve(body));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', err => retry > 0
      ? setTimeout(() => resolve(get(url, retry - 1)), 1500)
      : reject(err));
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

/** 民國日期 115/09/02 → 2026-09-02 */
function rocToISO(s) {
  const m = String(s || '').match(/(\d{2,3})\/(\d{1,2})\/(\d{1,2})/);
  if (!m) return null;
  return `${+m[1] + 1911}-${String(+m[2]).padStart(2, '0')}-${String(+m[3]).padStart(2, '0')}`;
}

/** 開放資料的 20260902 → 2026-09-02 */
const ymdToISO = s => /^\d{8}$/.test(s) ? `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6)}` : null;

const DAYMAP = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 日: 7, 天: 7 };

/** 從詳細頁 HTML 取出報名起訖日與上課星期 */
function parseDetail(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ');

  // 「報名日期 ：」後面接 115/08/03 12:00 ~ 115/08/30 18:00
  const signup = text.match(/報名日期\s*[：:]\s*([\s\S]{0,120}?)\(/);
  let su = null, se = null;
  if (signup) {
    const parts = signup[1].split('~');
    su = rocToISO(parts[0]);
    se = rocToISO(parts[1]);
  }

  // 逐堂課表的日期 → 去重取星期
  const days = [...new Set(
    [...html.matchAll(/\d{2,3}\/\d{1,2}\/\d{1,2}\s*\(星期([一二三四五六日天])\)/g)].map(m => DAYMAP[m[1]])
  )].sort((a, b) => a - b);

  return { su, se, days };
}

async function main() {
  console.log('[1/3] 讀取政府資料開放平臺的資料集資訊…');
  const meta = JSON.parse(await get(DATASET_API)).result;
  const jsonUrl = (meta.distribution.find(d => d.resourceFormat === 'JSON') || {}).resourceDownloadUrl;
  if (!jsonUrl) throw new Error('找不到 JSON 格式的下載網址，資料集結構可能已變更');
  console.log(`      官方最後更新：${meta.modifiedDate}`);

  console.log('[2/3] 下載課程清單…');
  const all = JSON.parse(await get(jsonUrl));
  const today = new Date();
  const todayYMD = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

  // 臺北市、且尚未開訓（已開訓的不要）
  const picked = all
    .filter(c => String(c['縣市別辦訓地'] || '').includes(CITY))
    .filter(c => String(c['開訓日期'] || '') >= todayYMD)
    .sort((a, b) => String(a['開訓日期']).localeCompare(String(b['開訓日期'])));
  console.log(`      全部 ${all.length} 筆 → ${CITY}未開訓 ${picked.length} 筆`);

  // 已經抓過的報名日與星期直接沿用，不再打擾政府網站
  const cache = {};
  try {
    const old = JSON.parse(fs.readFileSync(OUT, 'utf8'));
    (old.courses || []).forEach(c => { if (c.su && c.days && c.days.length) cache[c.id] = c; });
    console.log(`      已有 ${Object.keys(cache).length} 筆舊資料可沿用`);
  } catch (err) { /* 第一次跑還沒有檔案，正常 */ }

  console.log('[3/3] 補齊報名日與上課星期…');
  const todayISO = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const courses = [];
  let cached = 0, fetched = 0, pending = 0, closed = 0;
  let miss = 0, giveUp = false;   // 連續抓不到就放棄，不要在雲端空轉幾十分鐘

  for (let i = 0; i < picked.length; i++) {
    const c = picked[i];
    const id = String(c['課程代碼']);
    let detail = null;

    if (cache[id]) {
      detail = { su: cache[id].su, se: cache[id].se, days: cache[id].days };
      cached++;
    } else if (giveUp) {
      detail = { su: null, se: null, days: [] };
      pending++;
    } else {
      try {
        // 詳細頁不重試：連不上通常是整段 IP 被擋，重試只是白等
        detail = parseDetail(await get(DETAIL_URL(id), 0));
        if (!detail.su || !detail.days.length) throw new Error('關鍵欄位解析不到');
        fetched++;
        miss = 0;
      } catch (err) {
        detail = { su: null, se: null, days: [] };
        pending++;
        console.log(`      ⚠ 待補 ${id} ${c['課程名稱']}：${err.message}`);
        if (++miss >= MISS_LIMIT) {
          giveUp = true;
          console.log(`      連續 ${MISS_LIMIT} 筆抓不到，停止嘗試詳細頁（多半是這台機器的 IP 被擋）`);
        }
      }
      await sleep(GAP_MS);
    }

    // 報名已截止的照樣收進檔案（當作快取，省得下次又去抓），由頁面依當天日期隱藏
    if (detail.se && detail.se < todayISO) closed++;

    const row = {
      id,
      name: String(c['課程名稱'] || '').trim(),
      unit: String(c['訓練單位名稱'] || '').trim(),
      start: ymdToISO(String(c['開訓日期'])),
      end: ymdToISO(String(c['結訓日期'])),
      days: detail.days,
      hours: String(c['訓練時數'] || ''),
      su: detail.su,
      se: detail.se
    };
    if (!detail.su) row.pending = true;   // 頁面會標示「上課時間待補」
    courses.push(row);
    process.stdout.write(`      ${i + 1}/${picked.length}\r`);
  }
  console.log('');

  // 只有連清單都拿不到才算失敗；詳細頁抓不到會標 pending，不讓整份資料變空
  if (!courses.length) throw new Error('一筆課程都沒有，保留舊資料不覆蓋');

  // 課程內容跟上次完全一樣就不要動檔案，免得每跑一次都多一筆沒意義的提交
  let prev = null;
  try { prev = JSON.stringify(JSON.parse(fs.readFileSync(OUT, 'utf8')).courses); } catch (err) { /* 沒有舊檔 */ }
  if (prev === JSON.stringify(courses)) {
    console.log(`課程內容與上次相同（${courses.length} 筆），檔案不動。`);
    return;
  }

  const payload = {
    city: CITY,
    count: courses.length,
    pending,
    closed,
    fetchedAt: new Date().toISOString(),
    sourceModified: meta.modifiedDate,
    courses
  };
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 0) + '\n', 'utf8');
  console.log(`完成：${courses.length} 筆寫入 ${OUT}`);
  console.log(`      沿用舊資料 ${cached} 筆、新抓 ${fetched} 筆`);
  console.log(`      其中 ${closed} 筆報名已截止（留著當快取，頁面上不會顯示）→ 實際看得到 ${courses.length - closed} 筆`);
  if (pending) console.log(`      ⚠ 有 ${pending} 筆的上課時間待補，請在台灣的電腦執行 tools\\更新課程.bat`);
}

main().catch(err => {
  console.error('錯誤：' + err.message);
  process.exit(1);
});
