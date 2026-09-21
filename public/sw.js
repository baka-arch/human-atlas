// Service worker for the BHMS study atlas.
// App shell + study tools are cached for offline use. Model chunks are
// content-addressed and never change, so they are cached on first fetch and
// served cache-first afterwards — "Download for offline" simply warms this.
const CACHE = 'bhms-atlas-v2';
const APP_SHELL = ['/', '/favicon.svg', '/favicon-180.png', '/manifest.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(APP_SHELL).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

async function cacheFirst(request) {
  const hit = await caches.match(request);
  if (hit) return hit;
  const res = await fetch(request);
  if (res && res.ok) {
    try {
      const cache = await caches.open(CACHE);
      await cache.put(request, res.clone());
    } catch { /* quota — offline still works for this session */ }
  }
  return res;
}

async function networkFirst(request) {
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      try {
        const cache = await caches.open(CACHE);
        await cache.put(request, res.clone());
      } catch { /* ignore quota errors */ }
    }
    return res;
  } catch {
    const hit = await caches.match(request);
    return hit ?? caches.match('/');
  }
}

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== 'GET') return;
  // Model chunks + catalogue: immutable files, cache-first so "Download for
  // offline" makes the full 3D body available without a network.
  if (url.pathname.startsWith('/models/')) {
    e.respondWith(cacheFirst(e.request));
    return;
  }
  // Static build assets (hashed filenames): cache-first.
  if (url.pathname.startsWith('/assets/')) {
    e.respondWith(cacheFirst(e.request));
    return;
  }
  // Navigations and everything else: network-first, fall back to shell.
  e.respondWith(networkFirst(e.request));
});
