/**
 * Listen for 'install' event and cache required assets after event completion
 */
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open('version-1.0.0').then(function(c) {
      return c.addAll([
        '/',
        '/css/styles.css',
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
 * Listen for any 'fetch' event and respond with cached response if cached 
 * or
 * fetch from server and whilst the service-worker caches the new request-response pair.
 * Note: 
 */
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) 
        return response;                                                        
      else {
        //console.log(event.request);
        //return fetch(event.request);
        // Must return with a promise as respondWith() takes a promise.
        return fetch(event.request).then(function(response) {                                 
          let clone=response.clone();
          caches.open('version-1.0.0').then(function(c) {
            c.put(event.request, clone);
          });
          return response;
        }).catch(function(err) {
          // Serve with an image to indicate offline and not-cached status.
          return caches.match('/img/offline.png');
        });
      }
    })
  );
});