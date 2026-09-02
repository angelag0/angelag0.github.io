/*
 * 課程小幫手 - 中繼站（Cloudflare Worker）
 *
 * 為什麼需要它：在職訓練網封鎖了 GitHub Actions 所在的機房 IP 段（一律回 504），
 * 但同樣在國外的其他主機卻連得到。所以讓 Cloudflare 代抓一次，繞過那段被封的 IP。
 *
 * 部署方式見 tools/中繼站安裝說明.md，整段程式碼原封不動貼進 Cloudflare 的編輯器即可。
 *
 * 用法：
 *   https://你的網址.workers.dev/?ocid=173853   → 回傳該課程詳細頁的原始 HTML
 *   https://你的網址.workers.dev/?test=1        → 自我檢查，看得懂的中文結果
 *
 * 安全性：只允許代抓 ojt.wda.gov.tw 的課程詳細頁，而且課程代碼必須是純數字，
 * 沒辦法被拿去當成一般的翻牆跳板。
 */

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36';
const detailUrl = ocid => `https://ojt.wda.gov.tw/ClassSearch/Detail?PlanType=1&OCID=${ocid}`;

async function grab(ocid) {
  return fetch(detailUrl(ocid), {
    headers: {
      'User-Agent': UA,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'zh-TW,zh;q=0.9'
    }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 自我檢查：部署完直接用瀏覽器打開這個網址就知道通不通
    if (url.searchParams.get('test')) {
      const probe = '173853';
      let msg;
      try {
        const res = await grab(probe);
        const html = await res.text();
        const ok = res.status === 200 && html.includes('報名日期');
        msg = ok
          ? `✅ 通了！中繼站抓得到在職訓練網（HTTP ${res.status}，${html.length} 字元）。\n\n` +
            `請把下面這行網址整段複製給 Claude：\n${url.origin}`
          : `❌ 沒通。在職訓練網回應 HTTP ${res.status}，這段 IP 大概也被封了。\n` +
            `請把這整頁截圖給 Claude 看。`;
      } catch (err) {
        msg = `❌ 連不上：${err.message}\n請把這整頁截圖給 Claude 看。`;
      }
      return new Response(msg, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    const ocid = url.searchParams.get('ocid') || '';
    if (!/^\d{1,10}$/.test(ocid)) {
      return new Response('用法：?ocid=課程代碼（純數字），或 ?test=1 做自我檢查', {
        status: 400,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    try {
      const res = await grab(ocid);
      return new Response(res.body, {
        status: res.status,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (err) {
      return new Response('抓取失敗：' + err.message, {
        status: 502,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  }
};
