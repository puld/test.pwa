console.log('Custom service worker!')

self.addEventListener('install', function (e) {
  console.log("install!")
})
self.addEventListener('activate', function(event) {
  console.log("activate!")
})