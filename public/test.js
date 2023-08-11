import { assertEquals } from 'std/assert/assert_equals.ts';

import app from './app.js';

const FETCH = {
  GET: (pathname, status, callback) => {
    const input = `${pathname}`;

    Deno.test(`GET ${input}`, async () => {
      const res = await app.request(input, { method: 'GET' });
      assertEquals(res.status, status);
      await callback?.(res);
    });
  },
};

const name = ['svg'];

for await (const n of name) {
  const has = await caches.has(n);
  if (has) {
    await caches.delete(n);
    await caches.open(n);
  }
}

FETCH.GET('/npm/api/item?n=@klass/core', 200);
FETCH.GET('/npm/v?n=@klass/core', 200);
FETCH.GET('/npm/l?n=@klass/core', 200);

FETCH.GET('/bundlejs/api/item?n=@klass/core', 200);
FETCH.GET('/bundlejs/m?n=@klass/core', 200);
FETCH.GET('/bundlejs/mz?n=@klass/core', 200);

FETCH.GET('/ui/badge', 200);
FETCH.GET('/ui/badge/lucide', 200);
FETCH.GET('/ui/badge/simple', 200);
FETCH.GET('/ui/button', 200);
FETCH.GET('/ui/button/lucide', 200);
FETCH.GET('/ui/button/simple', 200);
FETCH.GET('/ui/icon/lucide', 200);
FETCH.GET('/ui/icon/simple', 200);
FETCH.GET('/ui/icon-button', 200);
FETCH.GET('/ui/icon-button/lucide', 200);
FETCH.GET('/ui/icon-button/simple', 200);

FETCH.GET('/', 200);
FETCH.GET('/not-found', 404);
