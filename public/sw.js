// Kill-switch service worker.
//
// The previous Gatsby site registered a Workbox service worker via
// gatsby-plugin-offline that aggressively precached the old app shell.
// Those registrations persist in visitors' browsers after the migration
// to Next.js, which causes them to keep seeing the old site.
//
// This script replaces the old worker at /sw.js. On activation it
// deletes every cache, unregisters itself, and reloads any open pages
// so visitors are bumped over to the current deployment.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));

      await self.registration.unregister();

      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })()
  );
});
