import dayjs from 'dayjs';

import { CACHE } from '~/libs/svg';

import { format, hono } from '~/utils';

export default hono((x) => {
  x.route(
    '/svg',
    hono((x) => {
      x.route(
        '/cache',
        hono((x) => {
          const getEntries = () => Object.entries(CACHE.value);

          x.get('/', (ctx) => {
            const now = Date.now();
            const entries = getEntries();
            let size = 0;
            let bytes: number;

            const object: Record<string, string> = {};

            entries.forEach(([key, { e, v }]) => {
              bytes = new Blob([v]).size;
              size += bytes;
              object[key] = `${format.size(bytes)} | ${dayjs(now).to(e)}`;
            });

            return ctx.json({
              length: Object.keys(object).length,
              size: format.size(size),
              value: object,
            });
          });

          x.get('/clean', (ctx) => {
            const now = Date.now();
            const entries = getEntries();
            let size = 0;
            let bytes: number;

            const object: Record<string, string> = {};

            entries
              .filter(([, { e }]) => e < now)
              .forEach(([key, { v }]) => {
                CACHE.del(key);

                bytes = new Blob([v]).size;
                size += bytes;
                object[key] = `${format.size(bytes)}`;
              });

            return ctx.json({
              length: Object.keys(object).length,
              size: format.size(size),
              value: object,
            });
          });

          return x;
        })
      );

      return x;
    })
  );

  return x;
});
