const cacheName = 'devcj-service-worker'

self.addEventListener('install', e => {
  console.log('Inside install handle ')
})

self.addEventListener('message', event => {
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(cacheName).then(cache => {
        return cache.addAll(event.data.payload)
      })
    )
  }
})
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})
