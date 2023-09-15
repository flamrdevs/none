import { Hono } from 'hono';

import { npm, svg } from '~/libs/dynamic';

import { components, utils } from '~/ui/dynamic';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono().get('/item/:name{.+$}', async (ctx) => {
      const { getPackageItem, getValidPackageNameParam } = await npm();

      return ctx.json(await getPackageItem(await getValidPackageNameParam(ctx)));
    })
  )

  /**
   * version
   */
  .get('/v/:name{.+$}', async (ctx) => {
    const { getPackageItem, getValidPackageNameParam } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const n = await getValidPackageNameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const v = (await getPackageItem(n)).version;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(v), children: v }));
  })

  /**
   * license
   */
  .get('/l/:name{.+$}', async (ctx) => {
    const { getPackageItem, getValidPackageNameParam } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const n = await getValidPackageNameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const l = (await getPackageItem(n)).license ?? 'UNLICENSED';

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(l), children: l }));
  })

  /**
   * weekly downloads
   */
  .get('/dw/:name{.+$}', async (ctx) => {
    const { getDownloadPointWeekItem, getValidPackageNameParam, formatDownloads } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const n = await getValidPackageNameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const text = `${formatDownloads((await getDownloadPointWeekItem(n)).downloads)}/W`;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(text), children: text }));
  })

  /**
   * monthly downloads
   */
  .get('/dm/:name{.+$}', async (ctx) => {
    const { getDownloadPointMonthItem, getValidPackageNameParam, formatDownloads } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const n = await getValidPackageNameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const text = `${formatDownloads((await getDownloadPointMonthItem(n)).downloads)}/M`;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(text), children: text }));
  });
