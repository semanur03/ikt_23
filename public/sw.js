

self.addEventListener('install', (event) => {
    console.log('service worker --> installing', event)
})

self.addEventListener('activate', (event) => {
    console.log('service worker --> activating', event)
})

self.addEventListener('fetch', (event) => {
    console.log('service worker --> fetching', event)
})