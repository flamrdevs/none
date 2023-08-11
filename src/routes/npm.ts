import { z } from 'zod';

import svg from '~/libs/svg';
import { getPackageItem, PackageNameSchema } from '~/libs/npm';

import { Badge, calcBadgeWidth } from '~/ui/components';
import { ColorSchema, ThemeSchema } from '~/ui/utils';
import { hono } from '~/utils';

export default hono((x) => {
  const BasicNPMQuerySchema = z.object({
    c: ColorSchema,
    t: ThemeSchema,
    n: PackageNameSchema,
  });

  x.route(
    '/api',
    hono((x) => {
      const PackageItemQuerySchema = z.object({
        n: PackageNameSchema,
      });

      x.get('/item', async (ctx) => {
        const { n } = await PackageItemQuerySchema.parseAsync(ctx.req.query());
        return ctx.json(await getPackageItem(n));
      });
      return x;
    })
  );

  x.get('/v', async (ctx) => {
    const { c, t, n } = await BasicNPMQuerySchema.parseAsync(ctx.req.query());

    const v = (await getPackageItem(n)).version;

    return await svg(ctx, () => Badge({ c, t, w: calcBadgeWidth(v), children: v }));
  });

  x.get('/l', async (ctx) => {
    const { c, t, n } = await BasicNPMQuerySchema.parseAsync(ctx.req.query());

    const l = (await getPackageItem(n)).license ?? 'UNLICENSED';

    return await svg(ctx, () => Badge({ c, t, w: calcBadgeWidth(l), children: l }));
  });

  return x;
});
