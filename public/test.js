import { assertEquals } from 'https://deno.land/std@0.210.0/assert/assert_equals.ts';

import app from './app.js';

const FETCH = {
  GET: async (pathname, status, callback) => {
    const input = `${pathname}`;

    await Deno.test(`GET ${input}`, async () => {
      const res = await app.request(input, { method: 'GET' });
      assertEquals(res.status, status);
      await callback?.(res);
    });
  },
};

// const name = ['svg'];

// for await (const n of name) {
//   const has = await caches.has(n);
//   if (has) {
//     await caches.delete(n);
//     await caches.open(n);
//   }
// }

await (async () => {
  // fetch untest request to fix Deno.test leaks bug then test later
  await app.request('/ui/badge', { method: 'GET' });
  await app.request('/ui/button', { method: 'GET' });
  await app.request('/ui/icon', { method: 'GET' });
  await app.request('/ui/icon-button', { method: 'GET' });
})();

await FETCH.GET('/bundlejs/api/item/propsplit', 200);
await FETCH.GET('/bundlejs/m/propsplit', 200);
await FETCH.GET('/bundlejs/mz/propsplit', 200);

await FETCH.GET('/bundlejs/api/item/@klass/core', 200);
await FETCH.GET('/bundlejs/m/@klass/core', 200);
await FETCH.GET('/bundlejs/mz/@klass/core', 200);

await FETCH.GET('/github/api/user-item/flamrdevs', 200);
await FETCH.GET('/github/api/repo-item/flamrdevs/none', 200);
await FETCH.GET('/github/repo/fc/flamrdevs/none', 200);
await FETCH.GET('/github/repo/sc/flamrdevs/none', 200);
await FETCH.GET('/github/repo/l/flamrdevs/none', 200);

await FETCH.GET('/npm/api/item/propsplit', 200);
await FETCH.GET('/npm/api/downloads/point/week/propsplit', 200);
await FETCH.GET('/npm/api/downloads/point/month/propsplit', 200);
await FETCH.GET('/npm/api/downloads/range/week/propsplit', 200);
await FETCH.GET('/npm/api/downloads/range/month/propsplit', 200);
await FETCH.GET('/npm/v/propsplit', 200);
await FETCH.GET('/npm/l/propsplit', 200);
await FETCH.GET('/npm/dw/propsplit', 200);
await FETCH.GET('/npm/dm/propsplit', 200);

await FETCH.GET('/npm/api/item/@klass/core', 200);
await FETCH.GET('/npm/v/@klass/core', 200);
await FETCH.GET('/npm/l/@klass/core', 200);
await FETCH.GET('/npm/dw/@klass/core', 200);
await FETCH.GET('/npm/dm/@klass/core', 200);

await FETCH.GET('/ui/badge', 200);
await FETCH.GET('/ui/badge/lucide', 200);
await FETCH.GET('/ui/badge/simple', 200);
await FETCH.GET('/ui/button', 200);
await FETCH.GET('/ui/button/lucide', 200);
await FETCH.GET('/ui/button/simple', 200);
await FETCH.GET('/ui/icon/lucide', 200);
await FETCH.GET('/ui/icon/simple', 200);
await FETCH.GET('/ui/icon-button', 200);
await FETCH.GET('/ui/icon-button/lucide', 200);
await FETCH.GET('/ui/icon-button/simple', 200);

await FETCH.GET('/', 200);
await FETCH.GET('/not-found', 404);
