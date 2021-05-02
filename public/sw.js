
// const nombreCache = 'pos-v1';
// const archivos = [
//     '/',
//     '/index.html',
//     '../index.js'
// ];

//Cuando se instala el SW
self.addEventListener('install', e => {
    console.log('Instalado el service worker')
    //  e.waitUntil(
    //      caches.open(nombreCache)
    //          .then(cache => {
    //              console.log('Cacheando');
    //              cache.addAll(archivos);
    //          })
    //  )
})

//Activar el SW
self.addEventListener('activate', e => {
    console.log('Service worker activado')
    console.log(e)
})


//Evento fetch para descargar archivos estáticos

self.addEventListener('fetch', e => {
    console.log('fetch...', e);

    //  e.respondWith(
    //      caches.match(e.request)
    //      .then(respuestaCache => {
    //          return respuestaCache;
    //      })
    //  )
})