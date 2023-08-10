import { z } from 'zod';

import svg from '~/libs/svg';
import { PackageNameSchema } from '~/libs/npm';
import { getBundleItem } from '~/libs/bundlejs';
import { Badge, calcBadgeWidth } from '~/ui/components';
import { ColorSchema, ThemeSchema } from '~/ui/utils';
import { hono } from '~/utils';

export default hono((x) => {
  const BasicBundleJSQuerySchema = z.object({
    c: ColorSchema,
    t: ThemeSchema,
    n: PackageNameSchema,
  });

  x.route(
    '/api',
    hono((x) => {
      const BundleItemQuerySchema = z.object({
        n: PackageNameSchema,
      });

      x.get('/item', async (ctx) => {
        const { n } = await BundleItemQuerySchema.parseAsync(ctx.req.query());
        return ctx.json(await getBundleItem(n));
      });
      return x;
    })
  );

  x.get('/m', async (ctx) => {
    const { c, t, n } = await BasicBundleJSQuerySchema.parseAsync(ctx.req.query());

    const s = (await getBundleItem(n)).size.uncompressedSize;

    return await svg(
      ctx,
      {
        _: 'bundlejs/m',
        c,
        t,
        n,
      },
      () => Badge({ c, t, w: calcBadgeWidth(s), children: s })
    );
  });

  x.get('/mz', async (ctx) => {
    const { c, t, n } = await BasicBundleJSQuerySchema.parseAsync(ctx.req.query());

    const s = (await getBundleItem(n)).size.compressedSize;

    return await svg(
      ctx,
      {
        _: 'bundlejs/mz',
        c,
        t,
        n,
      },
      () => Badge({ c, t, w: calcBadgeWidth(s), children: s })
    );
  });

  return x;
});
