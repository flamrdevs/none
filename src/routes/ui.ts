import { Hono } from 'hono';
import type { Context } from 'hono';
import { z } from 'zod';

import { svg } from '~/libs/dynamic';
import { components, utils } from '~/ui/dynamic';

export default new Hono()

  .route(
    '/badge',
    (() => {
      const BadgeElementSchema = z.string().min(2).max(48).default('badge');

      const getValidBadgeElementQuery = async (context: Context, key: string = 'e') => await BadgeElementSchema.parseAsync(context.req.query(key));

      return new Hono()

        .get('/', async (ctx) => {
          const { Badge, calcBadgeWidth } = await components.core();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const e = await getValidBadgeElementQuery(ctx);

          return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(e), children: e }));
        })

        .get('/lucide', async (ctx) => {
          const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
          const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const i = await getValidLucideIconQuery(ctx);
          const e = await getValidBadgeElementQuery(ctx);

          return await svg(ctx, async () =>
            Badge({
              c,
              t,
              w: calcBadgeIconWidth(e),
              children: BadgeChildIcon({ c: LucideIcons[i]({ s: 12 }), e }),
            })
          );
        })

        .get('/simple', async (ctx) => {
          const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
          const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const i = await getValidSimpleIconQuery(ctx);
          const e = await getValidBadgeElementQuery(ctx);

          return await svg(ctx, async () =>
            Badge({
              c,
              t,
              w: calcBadgeIconWidth(e),
              children: BadgeChildIcon({ c: SimpleIcons[i]({ s: 12 }), e }),
            })
          );
        });
    })()
  )

  .route(
    '/button',
    (() => {
      const ButtonElementSchema = z.string().min(2).max(48).default('button');

      const getValidButtonElementQuery = async (context: Context, key: string = 'e') => await ButtonElementSchema.parseAsync(context.req.query(key));

      return new Hono()
        .get('/', async (ctx) => {
          const { Button, calcButtonWidth } = await components.core();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const e = await getValidButtonElementQuery(ctx);

          return await svg(ctx, async () => Button({ c, t, w: calcButtonWidth(e), children: e }));
        })

        .get('/lucide', async (ctx) => {
          const { Button, ButtonChildIcon, calcButtonIconWidth } = await components.core();
          const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const i = await getValidLucideIconQuery(ctx);
          const e = await getValidButtonElementQuery(ctx);

          return await svg(ctx, async () =>
            Button({
              c,
              t,
              w: calcButtonIconWidth(e),
              children: ButtonChildIcon({ c: LucideIcons[i]({}), e }),
            })
          );
        })

        .get('/simple', async (ctx) => {
          const { Button, ButtonChildIcon, calcButtonIconWidth } = await components.core();
          const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const i = await getValidSimpleIconQuery(ctx);
          const e = await getValidButtonElementQuery(ctx);

          return await svg(ctx, async () =>
            Button({
              c,
              t,
              w: calcButtonIconWidth(e),
              children: ButtonChildIcon({ c: SimpleIcons[i]({}), e }),
            })
          );
        });
    })()
  )

  .route(
    '/icon',
    new Hono()

      .get('/lucide', async (ctx) => {
        const { Icon } = await components.core();
        const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
        const { getValidColorQuery, getValidThemeQuery } = await utils();

        const c = await getValidColorQuery(ctx);
        const t = await getValidThemeQuery(ctx);
        const i = await getValidLucideIconQuery(ctx);

        return await svg(ctx, async () => Icon({ c, t, children: LucideIcons[i]({}) }));
      })

      .get('/simple', async (ctx) => {
        const { Icon } = await components.core();
        const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
        const { getValidColorQuery, getValidThemeQuery } = await utils();

        const c = await getValidColorQuery(ctx);
        const t = await getValidThemeQuery(ctx);
        const i = await getValidSimpleIconQuery(ctx);

        return await svg(ctx, async () => Icon({ c, t, children: SimpleIcons[i]({}) }));
      })
  )

  .route(
    '/icon-button',
    (() => {
      const IconButtonElementSchema = z.string().length(1).default('x');

      const getValidIconButtonElementQuery = async (context: Context, key: string = 'e') => await IconButtonElementSchema.parseAsync(context.req.query(key));

      return new Hono()

        .get('/', async (ctx) => {
          const { Button } = await components.core();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const e = await getValidIconButtonElementQuery(ctx);

          return await svg(ctx, async () => Button({ c, t, children: e }));
        })
        .get('/lucide', async (ctx) => {
          const { Button } = await components.core();
          const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const i = await getValidLucideIconQuery(ctx);

          return await svg(ctx, async () => Button({ c, t, children: LucideIcons[i]({}) }));
        })
        .get('/simple', async (ctx) => {
          const { Button } = await components.core();
          const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
          const { getValidColorQuery, getValidThemeQuery } = await utils();

          const c = await getValidColorQuery(ctx);
          const t = await getValidThemeQuery(ctx);
          const i = await getValidSimpleIconQuery(ctx);

          return await svg(ctx, async () => Button({ c, t, children: SimpleIcons[i]({}) }));
        });
    })()
  );
