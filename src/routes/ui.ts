import { Hono } from 'hono';
import * as v from 'valibot';

import { components, utils } from '~/ui/dynamic';

import * as response from '~/utils/response';
import { createQueryKeyParser } from '~/utils/valibot';

export default new Hono()

  /**
   * badge
   */
  .route(
    '/badge',
    (() => {
      const getValidBadgeElementQuery = createQueryKeyParser(v.optional(v.string([v.minLength(2), v.maxLength(48)]), 'badge'), 'e');

      return (
        new Hono()

          /**
           * text
           */
          .get('/', async (ctx) => {
            const { Badge, calcBadgeWidth } = await components.core();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const e = getValidBadgeElementQuery(query);

            return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(e), children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
            const { LucideIcons, getValidLucideIconFromQuery } = await components.icon.lucide();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidLucideIconFromQuery(query);
            const e = getValidBadgeElementQuery(query);

            return await response.svg(ctx, async () =>
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
            const { SimpleIcons, getValidSimpleIconFromQuery } = await components.icon.simple();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidSimpleIconFromQuery(query);
            const e = getValidBadgeElementQuery(query);

            return await response.svg(ctx, async () =>
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
      const getValidButtonElementQuery = createQueryKeyParser(v.optional(v.string([v.minLength(2), v.maxLength(48)]), 'button'), 'e');

      return (
        new Hono()

          /**
           * text
           */
          .get('/', async (ctx) => {
            const { Button, calcButtonWidth } = await components.core();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const e = getValidButtonElementQuery(query);

            return await response.svg(ctx, async () => Button({ c, t, w: calcButtonWidth(e), children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { Button, ButtonChildIcon, calcButtonIconWidth } = await components.core();
            const { LucideIcons, getValidLucideIconFromQuery } = await components.icon.lucide();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidLucideIconFromQuery(query);
            const e = getValidButtonElementQuery(query);

            return await response.svg(ctx, async () =>
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
            const { SimpleIcons, getValidSimpleIconFromQuery } = await components.icon.simple();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidSimpleIconFromQuery(query);
            const e = getValidButtonElementQuery(query);

            return await response.svg(ctx, async () =>
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
        const { LucideIcons, getValidLucideIconFromQuery } = await components.icon.lucide();
        const { getValidColorQuery, getValidThemeQuery } = await utils();

        const query = ctx.req.query();

        const c = getValidColorQuery(query);
        const t = getValidThemeQuery(query);
        const i = getValidLucideIconFromQuery(query);

        return await response.svg(ctx, async () => Icon({ c, t, children: LucideIcons[i]({}) }));
      })

      /**
       * simple
       */
      .get('/simple', async (ctx) => {
        const { Icon } = await components.core();
        const { SimpleIcons, getValidSimpleIconFromQuery } = await components.icon.simple();
        const { getValidColorQuery, getValidThemeQuery } = await utils();

        const query = ctx.req.query();

        const c = getValidColorQuery(query);
        const t = getValidThemeQuery(query);
        const i = getValidSimpleIconFromQuery(query);

        return await response.svg(ctx, async () => Icon({ c, t, children: SimpleIcons[i]({}) }));
      })
  )

  /**
   * icon button
   */
  .route(
    '/icon-button',
    (() => {
      const getValidIconButtonElementQuery = createQueryKeyParser(v.optional(v.string([v.length(1)]), 'x'), 'e');

      return (
        new Hono()

          /**
           * text
           */
          .get('/', async (ctx) => {
            const { Button } = await components.core();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const e = getValidIconButtonElementQuery(query);

            return await response.svg(ctx, async () => Button({ c, t, children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { Button } = await components.core();
            const { LucideIcons, getValidLucideIconFromQuery } = await components.icon.lucide();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidLucideIconFromQuery(query);

            return await response.svg(ctx, async () => Button({ c, t, children: LucideIcons[i]({}) }));
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { Button } = await components.core();
            const { SimpleIcons, getValidSimpleIconFromQuery } = await components.icon.simple();
            const { getValidColorQuery, getValidThemeQuery } = await utils();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidSimpleIconFromQuery(query);

            return await response.svg(ctx, async () => Button({ c, t, children: SimpleIcons[i]({}) }));
          })
      );
    })()
  );
