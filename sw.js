// Minimal service worker so the game can be installed as a full-screen app.
// It does not cache anything: the game always loads the newest version.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
