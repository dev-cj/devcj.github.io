self.addEventListener('install', event => {
  event.waitUntil(preLoad())
})

let preLoad = () => {
  console.log('Installing web app')
  return caches.open('offline').then(cache => {
    console.log('caching index and important routes')
    return cache.addAll([
      '/fonts/',
      '/images',
      '/',
      '/js',
      '/pages',
      '/offline.html'
    ])
  })
}

self.addEventListener('fetch', event => {
  event.respondWith(
    checkResponse(event.request).catch(() => {
      return returnFromCache(event.request)
    })
  )
  event.waitUntil(addToCache(event.request))
})

let checkResponse = request => {
  return new Promise((fulfill, reject) => {
    fetch(request).then(response => {
      if (response.status !== 404) {
        fulfill(response)
      } else {
        reject()
      }
    }, reject)
  })
}

let addToCache = request => {
  return caches.open('offline').then(cache => {
    return fetch(request).then(response => {
      console.log(response.url + ' was cached')
      return cache.put(request, response)
    })
  })
}

let returnFromCache = request => {
  return caches.open('offline').then(cache => {
    return cache.match(request).then(matching => {
      if (!matching || matching.status == 404) {
        return cache.match('offline.html')
      } else {
        return matching
      }
    })
  })
}
