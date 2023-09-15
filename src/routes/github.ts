import { Hono } from 'hono';

import { github, svg } from '~/libs/dynamic';

import { components, utils } from '~/ui/dynamic';

export default new Hono()

  /**
   * api
   */
  .route(
    '/api',
    new Hono().get('/repo-item/:user/:repo', async (ctx) => {
      const { getRepoItem, getValidUsernameParam, getValidReponameParam } = await github();

      return ctx.json(await getRepoItem(await getValidUsernameParam(ctx), await getValidReponameParam(ctx)));
    })
  )

  /**
   * repo forks count
   */
  .get('/repo/fc/:user/:repo', async (ctx) => {
    const { getRepoItem, getValidUsernameParam, getValidReponameParam, formatCount } = await github();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const user = await getValidUsernameParam(ctx);
    const repo = await getValidReponameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const children = `Fork ${formatCount((await getRepoItem(user, repo)).forks_count)}`;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(children), children }));
  })

  /**
   * repo stargazers count
   */
  .get('/repo/sc/:user/:repo', async (ctx) => {
    const { getRepoItem, getValidUsernameParam, getValidReponameParam, formatCount } = await github();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const user = await getValidUsernameParam(ctx);
    const repo = await getValidReponameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const children = `Star ${formatCount((await getRepoItem(user, repo)).stargazers_count)}`;

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(children), children }));
  })

  /**
   * repo license
   */
  .get('/repo/l/:user/:repo', async (ctx) => {
    const { getRepoItem, getValidUsernameParam, getValidReponameParam } = await github();

    const { Badge, calcBadgeWidth } = await components.core();
    const { getValidColorQuery, getValidThemeQuery } = await utils();

    const user = await getValidUsernameParam(ctx);
    const repo = await getValidReponameParam(ctx);

    const c = await getValidColorQuery(ctx);
    const t = await getValidThemeQuery(ctx);

    const item = await getRepoItem(user, repo);
    const children = item.license ? `${item.license.spdx_id} license` : 'Null';

    return await svg(ctx, async () => Badge({ c, t, w: calcBadgeWidth(children), children }));
  });
