import type { Context } from 'hono';

import type { RootElement } from '~/libs/image';

import { image } from '~/libs/dynamic';

const CACHE: Record<string, Response> = {};

const CACHE_CONTROL = `public, max-age=${process.env.NODE_ENV === 'production' ? 86400 : 1}`;

const svg = async (context: Context, element: () => Promise<RootElement>) => {
  const key = context.req.url;

  if (key in CACHE) {
    const cached = CACHE[key].clone();
    cached.headers.set('x-cache', 'true');
    return cached;
  }

  const fresh = context.body(await (await image()).svg(await element()), 200, {
    'content-type': 'image/svg+xml',
    'cache-control': CACHE_CONTROL,
  });
  CACHE[key] = fresh.clone();
  return fresh;
};

export { svg };
