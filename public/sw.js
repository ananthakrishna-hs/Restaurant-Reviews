let static_cache = 'restaurant-reviews-v-1.0.0';

/**
 * Listen for 'install' event and cache required assets after event completion
 */
self.addEventListener("install", function(event) {
  //self.skipWaiting(); /*Optional*/
  event.waitUntil(
    caches.open(static_cache).then(function(c) {
      return c.addAll([
        '/',
        '/css/styles.css',
        'css/reset.css',
        '/data/restaurants.json',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/img/offline.png',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/index.html',
        '/restaurant.html'
      ]);
    })
  );
});


/**
 * Listens for any workers to become active, deletes any existing cache and adds new ones. 
 * For this change the version number of cache.
 */
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cache_list) {
      return Promise.all(
        cache_list.filter(function(cache_item) {
          return cache_item.startsWith('restaurant-reviews-') && 
          cache_item !== static_cache;  
        }).map(function(cache_item) {
          console.log(cache_item)
          return caches.delete(cache_item);
        })
      );
    })
  )
});

/**
 * Listen for any 'fetch' event and respond with cached response if cached 
 * or
 * fetch from server and whilst the service-worker caches the new request-response pair.
 */
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) 
        return response;                                                        
      else {
        return fetch(event.request).then(function(response) {                                 
          let clone=response.clone();
          caches.open(static_cache).then(function(c) {
            c.put(event.request, clone);
          });
          return response;
        }).catch(function(err) {
          return caches.match('/img/offline.png');
        });
      }
    })
  );
});