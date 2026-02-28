const CACHE_NAME = "memoria-4x3-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./pwa.js",
  "./icon-192.png",
  "./icon-512.png",
  "./sounds/acerto.mp3",
  "./sounds/erro.mp3",
  "./sounds/parabens.mp3",
  "./sounds/special.mp3",
  "./images/foto1.jpg",
  "./images/foto2.jpg",
  "./images/foto3.jpg",
  "./images/foto4.jpg",
  "./images/foto5.jpg",
  "./images/foto6.jpg",
  "./images/foto7.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
