// MedLingo Service Worker
// 版本號：每次更新資源時務必修改
const CACHE_VERSION = 'medlingo-v1.0.3';
const STATIC_CACHE  = `${CACHE_VERSION}-static`;
const DATA_CACHE    = `${CACHE_VERSION}-data`;

// 靜態資源（App Shell）
const STATIC_ASSETS = [
  '/Medlingo/',
  '/Medlingo/index.html',
  '/Medlingo/manifest.json',
  '/Medlingo/icons/icon.svg',
  // CDN 資源（離線時需要）
  'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js',
];

// 題庫資源（按需快取）
const DATA_ASSETS = [
  '/Medlingo/data/pharmacology.js',
  '/Medlingo/data/physiology.js',
  '/Medlingo/data/anatomy.js',
  '/Medlingo/data/biochemistry.js',
  '/Medlingo/data/microbiology.js',
  '/Medlingo/data/immunology.js',
  '/Medlingo/data/pathology.js',
  '/Medlingo/data/public_health.js',
  '/Medlingo/data/behavioral.js',
];

// ── Install：預快取 App Shell ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[SW] 預快取 App Shell...');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] 部分靜態資源快取失敗（CDN 不可用？）', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Activate：清除舊版快取 ─────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== STATIC_CACHE && key !== DATA_CACHE)
          .map(key => {
            console.log('[SW] 刪除舊快取：', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch：快取優先策略 ────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 題庫資料：網路優先，失敗用快取
  if (url.pathname.includes('/data/') && url.pathname.endsWith('.js')) {
    event.respondWith(networkFirstThenCache(event.request, DATA_CACHE));
    return;
  }

  // 外部 CDN：快取優先（CDN 內容不常更新）
  if (url.origin !== self.location.origin) {
    event.respondWith(cacheFirstThenNetwork(event.request, STATIC_CACHE));
    return;
  }

  // App Shell：快取優先
  event.respondWith(cacheFirstThenNetwork(event.request, STATIC_CACHE));
});

// 網路優先，失敗回落快取
async function networkFirstThenCache(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const networkResp = await fetch(request);
    if (networkResp.ok) {
      cache.put(request, networkResp.clone());
    }
    return networkResp;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response('// 離線：此題庫尚未快取', {
      headers: { 'Content-Type': 'text/javascript' }
    });
  }
}

// 快取優先，失敗回落網路
async function cacheFirstThenNetwork(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const networkResp = await fetch(request);
    if (networkResp.ok) {
      cache.put(request, networkResp.clone());
    }
    return networkResp;
  } catch {
    return new Response('Not available offline', { status: 503 });
  }
}

// ── Background Sync（未來擴充用）─────────────────────────
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CACHE_DATA') {
    // 預快取指定題庫
    const file = event.data.file;
    caches.open(DATA_CACHE).then(cache => {
      cache.add(`/medlingo/data/${file}.js`).catch(() => {});
    });
  }
});
