import { Hono } from 'hono';

import { npm } from '~/libs';

import { getValidColorQuery, getValidThemeQuery, components } from '~/ui';

import * as response from '~/utils/response';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono()
      .get('/item/:name{.+$}', async (ctx) => {
        const { getPackageItem, getValidPackageNameParam } = await npm();

        return ctx.json(await getPackageItem(getValidPackageNameParam(ctx.req.param())));
      })
      .route(
        '/downloads',
        new Hono()
          .route(
            '/point',
            new Hono()
              .get('/week/:name{.+$}', async (ctx) => {
                const { getDownloadPointWeekItem, getValidPackageNameParam } = await npm();

                return ctx.json(await getDownloadPointWeekItem(getValidPackageNameParam(ctx.req.param())));
              })
              .get('/month/:name{.+$}', async (ctx) => {
                const { getDownloadPointMonthItem, getValidPackageNameParam } = await npm();

                return ctx.json(await getDownloadPointMonthItem(getValidPackageNameParam(ctx.req.param())));
              })
          )
          .route(
            '/range',
            new Hono()
              .get('/week/:name{.+$}', async (ctx) => {
                const { getDownloadRangeWeekItem, getValidPackageNameParam } = await npm();

                return ctx.json(await getDownloadRangeWeekItem(getValidPackageNameParam(ctx.req.param())));
              })
              .get('/month/:name{.+$}', async (ctx) => {
                const { getDownloadRangeMonthItem, getValidPackageNameParam } = await npm();

                return ctx.json(await getDownloadRangeMonthItem(getValidPackageNameParam(ctx.req.param())));
              })
          )
      )
  )

  /**
   * version
   */
  .get('/v/:name{.+$}', async (ctx) => {
    const { getPackageItem, getValidPackageNameParam } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const v = (await getPackageItem(n)).version;

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(v), children: v }));
  })

  /**
   * license
   */
  .get('/l/:name{.+$}', async (ctx) => {
    const { getPackageItem, getValidPackageNameParam } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const l = (await getPackageItem(n)).license ?? 'UNLICENSED';

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(l), children: l }));
  })

  /**
   * weekly downloads
   */
  .get('/dw/:name{.+$}', async (ctx) => {
    const { getDownloadPointWeekItem, getValidPackageNameParam, formatDownloads } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const text = `${formatDownloads((await getDownloadPointWeekItem(n)).downloads)}/W`;

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(text), children: text }));
  })

  /**
   * monthly downloads
   */
  .get('/dm/:name{.+$}', async (ctx) => {
    const { getDownloadPointMonthItem, getValidPackageNameParam, formatDownloads } = await npm();

    const { Badge, calcBadgeWidth } = await components.core();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const text = `${formatDownloads((await getDownloadPointMonthItem(n)).downloads)}/M`;

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(text), children: text }));
  });
