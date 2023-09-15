import { Hono } from 'hono';

import { bundlejs, npm, svg } from '~/libs/dynamic';

import { components, utils } from '~/ui/dynamic';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono().get('/item/:name{.+$}', async (ctx) => {
      const { getBundleItem } = await bundlejs();
      const { getValidPackageNameParam } = await npm();

      return ctx.json(await getBundleItem(await getValidPackageNameParam(ctx)));
    })
  )

  /**
   * min
   */
  .get('/m/:name{.+$}', async (ctx) => {
    const { getBundleItem } = await bundlejs();
    const { getValidPackageNameParam } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const n = await getValidPackageNameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const s = (await getBundleItem(n)).size.uncompressedSize;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(s), children: s }));
  })

  /**
   * min+gzip
   */
  .get('/mz/:name{.+$}', async (ctx) => {
    const { getBundleItem } = await bundlejs();
    const { getValidPackageNameParam } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const n = await getValidPackageNameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const s = (await getBundleItem(n)).size.compressedSize;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(s), children: s }));
  });
