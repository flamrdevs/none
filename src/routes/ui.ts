import { z } from 'zod';

import svg from '~/libs/svg';
import { Badge, Button, ButtonChildIcon, calcBadgeWidth, calcButtonIconWidth, calcButtonWidth, Icon, LucideIcons, LucideIconSchema, SimpleIcons, SimpleIconSchema } from '~/ui/components';
import { ColorSchema, ThemeSchema } from '~/ui/utils';
import { hono } from '~/utils';

export default hono((x) => {
  const expires = 24 * 60 * 60 * 1000;

  x.route(
    '/badge',
    hono((x) => {
      const BadgeQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        e: z.string().min(2).max(48).default('badge'),
      });

      x.get('/', async (ctx) => {
        const { c, t, e } = await BadgeQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/badge',
            c,
            t,
            e,
          },
          () => Badge({ c, t, w: calcBadgeWidth(e), children: e }),
          { expires }
        );
      });

      return x;
    })
  );

  x.route(
    '/button',
    hono((x) => {
      const ButtonQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        e: z.string().min(2).max(48).default('button'),
      });

      x.get('/', async (ctx) => {
        const { c, t, e } = await ButtonQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/button',
            c,
            t,
            e,
          },
          () => Button({ c, t, w: calcButtonWidth(e), children: e }),
          { expires }
        );
      });

      const ButtonLucideQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: LucideIconSchema,
        e: z.string().min(2).max(48).default('github'),
      });

      x.get('/lucide', async (ctx) => {
        const { c, t, i, e } = await ButtonLucideQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/button/lucide',
            c,
            t,
            i,
            e,
          },
          () =>
            Button({
              c,
              t,
              w: calcButtonIconWidth(e),
              children: ButtonChildIcon({ c: LucideIcons[i]({}), e }),
            }),
          { expires }
        );
      });

      const ButtonSimpleQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: SimpleIconSchema,
        e: z.string().min(2).max(48).default('github'),
      });

      x.get('/simple', async (ctx) => {
        const { c, t, i, e } = await ButtonSimpleQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/button/simple',
            c,
            t,
            i,
            e,
          },
          () =>
            Button({
              c,
              t,
              w: calcButtonIconWidth(e),
              children: ButtonChildIcon({ c: SimpleIcons[i]({}), e }),
            }),
          { expires }
        );
      });

      return x;
    })
  );

  x.route(
    '/icon',
    hono((x) => {
      const IconLucideQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: LucideIconSchema,
      });

      x.get('/lucide', async (ctx) => {
        const { c, t, i } = await IconLucideQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/icon/lucide',
            c,
            t,
            i,
          },
          () => Icon({ c, t, children: LucideIcons[i]({}) }),
          { expires }
        );
      });

      const IconSimpleQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: SimpleIconSchema,
      });

      x.get('/simple', async (ctx) => {
        const { c, t, i } = await IconSimpleQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/icon/simple',
            c,
            t,
            i,
          },
          () => Icon({ c, t, children: SimpleIcons[i]({}) }),
          { expires }
        );
      });

      return x;
    })
  );

  x.route(
    '/icon-button',
    hono((x) => {
      const IconButtonQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        e: z.string().length(1).default('x'),
      });

      x.get('/', async (ctx) => {
        const { c, t, e } = await IconButtonQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/icon-button',
            c,
            t,
            e,
          },
          () => Button({ c, t, children: e }),
          { expires }
        );
      });

      const IconButtonLucideQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: LucideIconSchema,
      });

      x.get('/lucide', async (ctx) => {
        const { c, t, i } = await IconButtonLucideQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/icon-button/lucide',
            c,
            t,
            i,
          },
          () => Button({ c, t, children: LucideIcons[i]({}) }),
          { expires }
        );
      });

      const IconButtonSimpleQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: SimpleIconSchema,
      });

      x.get('/simple', async (ctx) => {
        const { c, t, i } = await IconButtonSimpleQuerySchema.parseAsync(ctx.req.query());

        return await svg(
          ctx,
          {
            _: 'ui/icon-button/simple',
            c,
            t,
            i,
          },
          () => Button({ c, t, children: SimpleIcons[i]({}) }),
          { expires }
        );
      });

      return x;
    })
  );

  return x;
});
