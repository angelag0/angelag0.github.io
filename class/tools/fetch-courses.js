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
const FAIL_LIMIT = 0.3;  // 失敗超過三成就視為來源異常，不覆蓋舊檔

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

  console.log('[3/3] 逐筆讀取課程詳細頁（補報名日與上課星期）…');
  const todayISO = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const courses = [];
  let failed = 0;
  let closed = 0;
  for (let i = 0; i < picked.length; i++) {
    const c = picked[i];
    const id = String(c['課程代碼']);
    let detail = { su: null, se: null, days: [] };
    try {
      detail = parseDetail(await get(DETAIL_URL(id)));
      if (!detail.su || !detail.days.length) throw new Error('關鍵欄位解析不到');
    } catch (err) {
      failed++;
      console.log(`      ⚠ ${id} ${c['課程名稱']}：${err.message}`);
    }
    // 報名已經截止的不收；解析不到報名日的則保留，寧可多顯示也不要漏掉
    if (detail.se && detail.se < todayISO) {
      closed++;
    } else {
      courses.push({
        id,
        name: String(c['課程名稱'] || '').trim(),
        unit: String(c['訓練單位名稱'] || '').trim(),
        start: ymdToISO(String(c['開訓日期'])),
        end: ymdToISO(String(c['結訓日期'])),
        days: detail.days,
        hours: String(c['訓練時數'] || ''),
        su: detail.su,
        se: detail.se
      });
    }
    process.stdout.write(`      ${i + 1}/${picked.length}\r`);
    if (i < picked.length - 1) await sleep(GAP_MS);
  }
  console.log('');

  if (picked.length && failed / picked.length > FAIL_LIMIT) {
    throw new Error(`失敗 ${failed}/${picked.length} 筆，超過容許值；保留舊資料不覆蓋（來源網站可能改版）`);
  }

  const payload = {
    city: CITY,
    count: courses.length,
    closed,
    failed,
    fetchedAt: new Date().toISOString(),
    sourceModified: meta.modifiedDate,
    courses
  };
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 0) + '\n', 'utf8');
  console.log(`完成：${courses.length} 筆寫入 ${OUT}`);
  console.log(`      （排除報名已截止 ${closed} 筆${failed ? `、解析失敗 ${failed} 筆` : ''}）`);
}

main().catch(err => {
  console.error('錯誤：' + err.message);
  process.exit(1);
});
