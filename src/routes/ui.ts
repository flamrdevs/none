import { z } from 'zod';

import svg from '~/libs/svg';
import {
  Badge,
  BadgeChildIcon,
  Button,
  ButtonChildIcon,
  calcBadgeWidth,
  calcBadgeIconWidth,
  calcButtonIconWidth,
  calcButtonWidth,
  Icon,
  LucideIcons,
  LucideIconSchema,
  SimpleIcons,
  SimpleIconSchema,
} from '~/ui/components';
import { ColorSchema, ThemeSchema } from '~/ui/utils';
import { hono } from '~/utils';

export default hono((x) => {
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

        return await svg(ctx, () => Badge({ c, t, w: calcBadgeWidth(e), children: e }));
      });

      const BadgeLucideQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: LucideIconSchema,
        e: z.string().min(2).max(48).default('code'),
      });

      x.get('/lucide', async (ctx) => {
        const { c, t, i, e } = await BadgeLucideQuerySchema.parseAsync(ctx.req.query());

        return await svg(ctx, () =>
          Badge({
            c,
            t,
            w: calcBadgeIconWidth(e),
            children: BadgeChildIcon({ c: LucideIcons[i]({ s: 12 }), e }),
          })
        );
      });

      const BadgeSimpleQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: SimpleIconSchema,
        e: z.string().min(2).max(48).default('github'),
      });

      x.get('/simple', async (ctx) => {
        const { c, t, i, e } = await BadgeSimpleQuerySchema.parseAsync(ctx.req.query());

        return await svg(ctx, () =>
          Badge({
            c,
            t,
            w: calcBadgeIconWidth(e),
            children: BadgeChildIcon({ c: SimpleIcons[i]({ s: 12 }), e }),
          })
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

        return await svg(ctx, () => Button({ c, t, w: calcButtonWidth(e), children: e }));
      });

      const ButtonLucideQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: LucideIconSchema,
        e: z.string().min(2).max(48).default('code'),
      });

      x.get('/lucide', async (ctx) => {
        const { c, t, i, e } = await ButtonLucideQuerySchema.parseAsync(ctx.req.query());

        return await svg(ctx, () =>
          Button({
            c,
            t,
            w: calcButtonIconWidth(e),
            children: ButtonChildIcon({ c: LucideIcons[i]({}), e }),
          })
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

        return await svg(ctx, () =>
          Button({
            c,
            t,
            w: calcButtonIconWidth(e),
            children: ButtonChildIcon({ c: SimpleIcons[i]({}), e }),
          })
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

        return await svg(ctx, () => Icon({ c, t, children: LucideIcons[i]({}) }));
      });

      const IconSimpleQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: SimpleIconSchema,
      });

      x.get('/simple', async (ctx) => {
        const { c, t, i } = await IconSimpleQuerySchema.parseAsync(ctx.req.query());

        return await svg(ctx, () => Icon({ c, t, children: SimpleIcons[i]({}) }));
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

        return await svg(ctx, () => Button({ c, t, children: e }));
      });

      const IconButtonLucideQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: LucideIconSchema,
      });

      x.get('/lucide', async (ctx) => {
        const { c, t, i } = await IconButtonLucideQuerySchema.parseAsync(ctx.req.query());

        return await svg(ctx, () => Button({ c, t, children: LucideIcons[i]({}) }));
      });

      const IconButtonSimpleQuerySchema = z.object({
        c: ColorSchema,
        t: ThemeSchema,
        i: SimpleIconSchema,
      });

      x.get('/simple', async (ctx) => {
        const { c, t, i } = await IconButtonSimpleQuerySchema.parseAsync(ctx.req.query());

        return await svg(ctx, () => Button({ c, t, children: SimpleIcons[i]({}) }));
      });

      return x;
    })
  );

  return x;
});
