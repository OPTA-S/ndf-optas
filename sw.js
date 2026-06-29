/* OPTA-S Notes de frais — service worker minimal.
   Volontairement SANS cache : passe-plat réseau pur.
   But = rendre l'app "installable" (icône écran d'accueil) sans jamais
   servir une vieille version (cohérent avec l'auto-refresh de version). */
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  // Réseau d'abord, aucun stockage. En cas d'échec réseau total, on laisse le navigateur gérer.
  e.respondWith(fetch(e.request).catch(() => Response.error()));
});
