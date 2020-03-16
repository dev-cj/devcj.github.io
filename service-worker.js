// const cacheName = 'devcj-service-worker'
// const filesToCache = ['/fonts/', '/images/', '/', '/js/', '/pages/']

// /* Start the service worker and cache all of the app's content */
// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       return cache.addAll(filesToCache)
//     })
//   )
// })

// /* Serve cached content when offline */
// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request)
//     })
//   )
// })
const KEY = 'devcj-service-worker'

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('message', event => {
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(KEY).then(cache => {
        return cache.addAll(event.data.payload)
      })
    )
  }
})
