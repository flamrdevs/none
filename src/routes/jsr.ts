import { Hono } from 'hono';

import { jsr } from '~/libs';

import { getValidColorQuery, getValidThemeQuery, core } from '~/ui';

import * as response from '~/utils/response';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono().get('/item/:name{.+$}', async (ctx) => {
      const { getPackageItem, getValidPackageNameParam } = await jsr();

      return ctx.json(await getPackageItem(getValidPackageNameParam(ctx.req.param())));
    })
  )

  /**
   * version
   */
  .get('/v/:name{.+$}', async (ctx) => {
    const { getPackageItem, getValidPackageNameParam } = await jsr();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const v = (await getPackageItem(n)).latest;

    return await response.svg(ctx, async () => core.Badge({ c, t, w: core.calcBadgeWidth(v), children: v }));
  });
