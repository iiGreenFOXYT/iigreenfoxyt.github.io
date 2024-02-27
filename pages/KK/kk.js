self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('kiara-cache-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/app.js',
          '/path/to/other/assets'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  

  // Open the install popup
function openPopup() {
    document.getElementById('installPopup').style.display = 'block';
  }
  
  // Close the install popup
  function closePopup() {
    document.getElementById('installPopup').style.display = 'none';
  }
  
  // Install the app
  function installApp() {
    // Implement installation logic here
    alert('App installed!');
    closePopup();
  }
  
  // Show the install popup when the page loads
  window.onload = function() {
    openPopup();
  };
  
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('kiara-cache-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/pages/KK/kiara.html',
          '//pages/KK/kiara.css',
          '/app.js',
          '/path/to/other/assets'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  