import { Hono } from 'hono';

import { github } from '~/libs';

import { getValidColorQuery, getValidThemeQuery, components } from '~/ui';

import * as response from '~/utils/response';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono()
      .get('/user-item/:user', async (ctx) => {
        const { getUserItem, getValidUsernameParam } = await github();

        return ctx.json(await getUserItem(getValidUsernameParam(ctx.req.param())));
      })
      .get('/repo-item/:user/:repo', async (ctx) => {
        const { getRepoItem, getValidUsernameParam, getValidReponameParam } = await github();

        const param = ctx.req.param();

        return ctx.json(await getRepoItem(getValidUsernameParam(param), getValidReponameParam(param)));
      })
  )

  /**
   * repo forks count
   */
  .get('/repo/fc/:user/:repo', async (ctx) => {
    const { getRepoItem, getValidUsernameParam, getValidReponameParam, formatCount } = await github();

    const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
    const { LucideIcons } = await components.icon.lucide();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const user = getValidUsernameParam(param);
    const repo = getValidReponameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const children = `${formatCount((await getRepoItem(user, repo)).forks_count)}`;

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeIconWidth(children), children: BadgeChildIcon({ c: LucideIcons['git-fork']({ s: 12 }), e: children }) }));
  })

  /**
   * repo stargazers count
   */
  .get('/repo/sc/:user/:repo', async (ctx) => {
    const { getRepoItem, getValidUsernameParam, getValidReponameParam, formatCount } = await github();

    const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
    const { LucideIcons } = await components.icon.lucide();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const user = getValidUsernameParam(param);
    const repo = getValidReponameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const children = `${formatCount((await getRepoItem(user, repo)).stargazers_count)}`;

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeIconWidth(children), children: BadgeChildIcon({ c: LucideIcons['star']({ s: 12 }), e: children }) }));
  })

  /**
   * repo license
   */
  .get('/repo/l/:user/:repo', async (ctx) => {
    const { getRepoItem, getValidUsernameParam, getValidReponameParam } = await github();

    const { Badge, BadgeChildIcon, calcBadgeIconWidth } = await components.core();
    const { LucideIcons } = await components.icon.lucide();

    const param = ctx.req.param();
    const query = ctx.req.query();

    const user = getValidUsernameParam(param);
    const repo = getValidReponameParam(param);

    const c = getValidColorQuery(query);
    const t = getValidThemeQuery(query);

    const item = await getRepoItem(user, repo);
    const children = item.license ? `${item.license.spdx_id}` : 'Null';

    return await response.svg(ctx, async () => Badge({ c, t, w: calcBadgeIconWidth(children), children: BadgeChildIcon({ c: LucideIcons['scale']({ s: 12 }), e: children }) }));
  });
