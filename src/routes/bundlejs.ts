import { Hono } from 'hono';

import { bundlejs, npm } from '~/libs';

import { getValidColorQuery, getValidThemeQuery, core } from '~/ui';

import * as response from '~/utils/response';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono().get('/item/:name{.+$}', async (ctx) => {
      const { getBundleItem } = await bundlejs();
      const { getValidPackageNameParam } = await npm();

      return ctx.json(await getBundleItem(getValidPackageNameParam(ctx.req.param())));
    })
  )

  /**
   * min
   */
  .get('/m/:name{.+$}', async (ctx) => {
    const { getBundleItem } = await bundlejs();
    const { getValidPackageNameParam } = await npm();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const s = (await getBundleItem(n)).size.uncompressedSize;

    return await response.svg(ctx, async () => core.Badge({ c, t, w: core.calcBadgeWidth(s), children: s }));
  })

  /**
   * min+gzip
   */
  .get('/mz/:name{.+$}', async (ctx) => {
    const { getBundleItem } = await bundlejs();
    const { getValidPackageNameParam } = await npm();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const n = getValidPackageNameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const s = (await getBundleItem(n)).size.compressedSize;

    return await response.svg(ctx, async () => core.Badge({ c, t, w: core.calcBadgeWidth(s), children: s }));
  });
