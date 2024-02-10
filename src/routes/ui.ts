import { Hono } from 'hono';
import * as v from 'valibot';

import { getValidColorQuery, getValidThemeQuery, core, icon } from '~/ui';

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
            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const e = getValidBadgeElementQuery(query);

            return await response.svg(ctx, async () => core.Badge({ c, t, w: core.calcBadgeWidth(e), children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { LucideIcons, getValidLucideIconFromQuery } = await icon.lucide();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidLucideIconFromQuery(query);
            const e = getValidBadgeElementQuery(query);

            return await response.svg(ctx, async () =>
              core.Badge({
                c,
                t,
                w: core.calcBadgeIconWidth(e),
                children: core.BadgeChildIcon({ c: LucideIcons[i]({ s: 12 }), e }),
              })
            );
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { SimpleIcons, getValidSimpleIconFromQuery } = await icon.simple();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidSimpleIconFromQuery(query);
            const e = getValidBadgeElementQuery(query);

            return await response.svg(ctx, async () =>
              core.Badge({
                c,
                t,
                w: core.calcBadgeIconWidth(e),
                children: core.BadgeChildIcon({ c: SimpleIcons[i]({ s: 12 }), e }),
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
            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const e = getValidButtonElementQuery(query);

            return await response.svg(ctx, async () => core.Button({ c, t, w: core.calcButtonWidth(e), children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { LucideIcons, getValidLucideIconFromQuery } = await icon.lucide();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidLucideIconFromQuery(query);
            const e = getValidButtonElementQuery(query);

            return await response.svg(ctx, async () =>
              core.Button({
                c,
                t,
                w: core.calcButtonIconWidth(e),
                children: core.ButtonChildIcon({ c: LucideIcons[i]({}), e }),
              })
            );
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { SimpleIcons, getValidSimpleIconFromQuery } = await icon.simple();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidSimpleIconFromQuery(query);
            const e = getValidButtonElementQuery(query);

            return await response.svg(ctx, async () =>
              core.Button({
                c,
                t,
                w: core.calcButtonIconWidth(e),
                children: core.ButtonChildIcon({ c: SimpleIcons[i]({}), e }),
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
        const { LucideIcons, getValidLucideIconFromQuery } = await icon.lucide();

        const query = ctx.req.query();

        const c = getValidColorQuery(query);
        const t = getValidThemeQuery(query);
        const i = getValidLucideIconFromQuery(query);

        return await response.svg(ctx, async () => core.Icon({ c, t, children: LucideIcons[i]({}) }));
      })

      /**
       * simple
       */
      .get('/simple', async (ctx) => {
        const { SimpleIcons, getValidSimpleIconFromQuery } = await icon.simple();

        const query = ctx.req.query();

        const c = getValidColorQuery(query);
        const t = getValidThemeQuery(query);
        const i = getValidSimpleIconFromQuery(query);

        return await response.svg(ctx, async () => core.Icon({ c, t, children: SimpleIcons[i]({}) }));
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
            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const e = getValidIconButtonElementQuery(query);

            return await response.svg(ctx, async () => core.Button({ c, t, children: e }));
          })

          /**
           * lucide
           */
          .get('/lucide', async (ctx) => {
            const { LucideIcons, getValidLucideIconFromQuery } = await icon.lucide();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidLucideIconFromQuery(query);

            return await response.svg(ctx, async () => core.Button({ c, t, children: LucideIcons[i]({}) }));
          })

          /**
           * simple
           */
          .get('/simple', async (ctx) => {
            const { SimpleIcons, getValidSimpleIconFromQuery } = await icon.simple();

            const query = ctx.req.query();

            const c = getValidColorQuery(query);
            const t = getValidThemeQuery(query);
            const i = getValidSimpleIconFromQuery(query);

            return await response.svg(ctx, async () => core.Button({ c, t, children: SimpleIcons[i]({}) }));
          })
      );
    })()
  );
