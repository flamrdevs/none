import { Hono } from 'hono';

import svg from '~/libs/svg.dynamic';
import { getValidPackageNameQuery } from '~/libs/npm';
import { getBundleItem } from '~/libs/bundlejs';
import { components, utils } from '~/ui/dynamic';

export default new Hono()

  .route(
    '/api',
    new Hono().get('/item', async (ctx) => {
      return ctx.json(await getBundleItem(await getValidPackageNameQuery(ctx)));
    })
  )

  .get('/m', async (ctx) => {
    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);
    const n = await getValidPackageNameQuery(ctx);

    const s = (await getBundleItem(n)).size.uncompressedSize;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(s), children: s }));
  })

  .get('/mz', async (ctx) => {
    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);
    const n = await getValidPackageNameQuery(ctx);

    const s = (await getBundleItem(n)).size.compressedSize;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(s), children: s }));
  });
