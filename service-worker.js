const cacheName = 'devcj-service-worker'
// const filesToCache = [
//   '/fonts/',
//   '/images/',
//   '/',
//   '/js/demo.js',
//   '/js/jquery.particlebackground.js',
//   '/pages/'
// ]

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', e => {
  e.waitUntil(self.skipWaiting())
})

/* Serve cached content when offline */
// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request)
//     })
//   )
// })
self.addEventListener('message', event => {
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(cacheName).then(cache => {
        return cache.addAll(event.data.payload)
      })
    )
  }
})
