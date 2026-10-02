// 離線用的背景程式：把殼（index.html 與圖示）存在手機裡。
// 存過的：網路夠快（1.5 秒內回來）就用新的；慢或沒網路就先給存好的，新的在背景存起來，下次開就是新的。沒存過的：等網路。
// 行程資料不經過這裡（那是加密後存在 IndexedDB 的），這裡只管殼本身。
const VERSION = '5dabc0cfc368';
const CACHE = 'tm-shell-' + VERSION;
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
const WAIT = 1500;                                             // 等網路最多等這麼久（毫秒）
const keyOf = req => { const u = new URL(req.url); u.search = ''; u.hash = ''; return u.href; };   // 網址後面的 ?… 不算：同一頁只存一份

self.addEventListener('install', e => {
  // 一律跟伺服器要新的（不拿瀏覽器自己暫存的舊檔）
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('tm-shell-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;   // 別的網站（資料、地圖）不攔
  e.respondWith((async () => {
    const cache = await caches.open(CACHE), key = keyOf(req);
    const hit = await cache.match(key) || (req.mode === 'navigate' ? await cache.match(new URL('./index.html', self.registration.scope).href) : undefined);
    const net = fetch(req, { cache: 'no-cache' }).then(res => (res && res.ok ? cache.put(key, res.clone()).then(() => res, () => res) : res));
    if (!hit) return net;
    const quick = await Promise.race([net.then(res => (res && res.ok ? res : null), () => null), new Promise(done => setTimeout(done, WAIT, null))]);
    if (quick) return quick;
    e.waitUntil(net.then(() => {}, () => {}));                 // 慢：先給存好的，新的繼續在背景抓、存起來
    return hit;
  })());
});
