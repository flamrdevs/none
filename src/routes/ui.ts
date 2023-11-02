import { Hono } from 'hono';
import type { Context } from 'hono';
import * as v from 'valibot';

import { svg } from '~/libs/dynamic';
import { components, utils } from '~/ui/dynamic';

export default new Hono()

  /**
   * badge
   */
  .route(
    '/badge',
    (() => {
      const BadgeElementSchema = v.optional(v.string([v.minLength(2), v.maxLength(48)]), 'badge');

      const getValidBadgeElementQuery = (context: Context, key: string = 'e') => v.parse(BadgeElementSchema, context.req.query(key));

      return (
        new Hono()

          /**
           * text
           */
          .get('/', async (ctx) => {
            const { Badge, calcBadgeWidth } = await components.core();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const e = getValidBadgeElementQuery(ctx);

            return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(e), children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
            const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const i = getValidLucideIconQuery(ctx);
            const e = getValidBadgeElementQuery(ctx);

            return await svg(ctx, async () =>
              Badge({
                c,
                t,
                w: calcBadgeIconWidth(e),
                children: BadgeChildIcon({ c: LucideIcons[i]({ s: 12 }), e }),
              })
            );
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
            const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const i = getValidSimpleIconQuery(ctx);
            const e = getValidBadgeElementQuery(ctx);

            return await svg(ctx, async () =>
              Badge({
                c,
                t,
                w: calcBadgeIconWidth(e),
                children: BadgeChildIcon({ c: SimpleIcons[i]({ s: 12 }), e }),
              })
            );
          })
      );
    })()
  )

  /**
   * button
   */
  .route(
    '/button',
    (() => {
      const ButtonElementSchema = v.optional(v.string([v.minLength(2), v.maxLength(48)]), 'button');

      const getValidButtonElementQuery = (context: Context, key: string = 'e') => v.parse(ButtonElementSchema, context.req.query(key));

      return (
        new Hono()

          /**
           * text
           */
          .get('/', async (ctx) => {
            const { Button, calcButtonWidth } = await components.core();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const e = getValidButtonElementQuery(ctx);

            return await svg(ctx, async () => Button({ c, t, w: calcButtonWidth(e), children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { Button, ButtonChildIcon, calcButtonIconWidth } = await components.core();
            const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const i = getValidLucideIconQuery(ctx);
            const e = getValidButtonElementQuery(ctx);

            return await svg(ctx, async () =>
              Button({
                c,
                t,
                w: calcButtonIconWidth(e),
                children: ButtonChildIcon({ c: LucideIcons[i]({}), e }),
              })
            );
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { Button, ButtonChildIcon, calcButtonIconWidth } = await components.core();
            const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const i = getValidSimpleIconQuery(ctx);
            const e = getValidButtonElementQuery(ctx);

            return await svg(ctx, async () =>
              Button({
                c,
                t,
                w: calcButtonIconWidth(e),
                children: ButtonChildIcon({ c: SimpleIcons[i]({}), e }),
              })
            );
          })
      );
    })()
  )

  /**
   * icon
   */
  .route(
    '/icon',
    new Hono()

      /**
       * lucide
       */
      .get('/lucide', async (ctx) => {
        const { Icon } = await components.core();
        const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
        const { getValidColorQuery, getValidThemeQuery } = await utils();

        const c = getValidColorQuery(ctx);
        const t = getValidThemeQuery(ctx);
        const i = getValidLucideIconQuery(ctx);

        return await svg(ctx, async () => Icon({ c, t, children: LucideIcons[i]({}) }));
      })

      /**
       * simple
       */
      .get('/simple', async (ctx) => {
        const { Icon } = await components.core();
        const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
        const { getValidColorQuery, getValidThemeQuery } = await utils();

        const c = getValidColorQuery(ctx);
        const t = getValidThemeQuery(ctx);
        const i = getValidSimpleIconQuery(ctx);

        return await svg(ctx, async () => Icon({ c, t, children: SimpleIcons[i]({}) }));
      })
  )

  /**
   * icon button
   */
  .route(
    '/icon-button',
    (() => {
      const IconButtonElementSchema = v.optional(v.string([v.length(1)]), 'x');

      const getValidIconButtonElementQuery = (context: Context, key: string = 'e') => v.parse(IconButtonElementSchema, context.req.query(key));

      return (
        new Hono()

          /**
           * text
           */
          .get('/', async (ctx) => {
            const { Button } = await components.core();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const e = getValidIconButtonElementQuery(ctx);

            return await svg(ctx, async () => Button({ c, t, children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { Button } = await components.core();
            const { LucideIcons, getValidLucideIconQuery } = await components.icon.lucide();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const i = getValidLucideIconQuery(ctx);

            return await svg(ctx, async () => Button({ c, t, children: LucideIcons[i]({}) }));
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { Button } = await components.core();
            const { SimpleIcons, getValidSimpleIconQuery } = await components.icon.simple();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const c = getValidColorQuery(ctx);
            const t = getValidThemeQuery(ctx);
            const i = getValidSimpleIconQuery(ctx);

            return await svg(ctx, async () => Button({ c, t, children: SimpleIcons[i]({}) }));
          })
      );
    })()
  );
