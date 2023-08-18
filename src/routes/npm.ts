import { Hono } from 'hono';

import { npm, svg } from '~/libs/dynamic';

import { components, utils } from '~/ui/dynamic';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono().get('/item', async (ctx) => {
      const { getPackageItem, getValidPackageNameQuery } = await npm();

      return ctx.json(await getPackageItem(await getValidPackageNameQuery(ctx)));
    })
  )

  /**
   * version
   */
  .get('/v', async (ctx) => {
    const { getPackageItem, getValidPackageNameQuery } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);
    const n = await getValidPackageNameQuery(ctx);

    const v = (await getPackageItem(n)).version;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(v), children: v }));
  })

  /**
   * license
   */
  .get('/l', async (ctx) => {
    const { getPackageItem, getValidPackageNameQuery } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);
    const n = await getValidPackageNameQuery(ctx);

    const l = (await getPackageItem(n)).license ?? 'UNLICENSED';

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(l), children: l }));
  });
