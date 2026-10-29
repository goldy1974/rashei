const C='rashei-v2';
const F=['./','index.html','dict.js','gloss.js','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png',
'vendor/tesseract.min.js','vendor/worker.min.js','vendor/tesseract-core-simd-lstm.wasm.js','vendor/tesseract-core-lstm.wasm.js','vendor/heb.traineddata.gz','vendor/heb_rashi.traineddata.gz'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
