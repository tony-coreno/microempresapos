
//Cuando se instala el SW
self.addEventListener('install', e => {
    console.log('Instalado el service worker')
    console.log(e);
})

//Activar el SW
self.addEventListener('activate', e => {
    console.log('Service worker activado')
    console.log(e)
})


//Evento fetch para descargar archivos estáticos

self.addEventListener('fetch', e => {
    console.log('fetch...', e)
})