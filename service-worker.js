const cacheName = 'perpetual-help-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/img/mary.jpg',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
];

// Install service worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Activate service worker
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch files
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
