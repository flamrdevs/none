import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { cors } from 'hono/cors';
import { compress } from 'hono/compress';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';

import dayjs from 'dayjs';

import * as v from 'valibot';

import * as routes from '~/routes';

const app = new Hono();

const build = dayjs().format();

app.use('*', cors({ origin: '*' }), compress(), secureHeaders({ crossOriginResourcePolicy: false }));

if (process.env.NODE_ENV === 'development') {
  app.use('*', logger());
}

app
  //
  .route('/bundlejs', routes.bundlejs)
  .route('/github', routes.github)
  .route('/npm', routes.npm)
  .route('/ui', routes.ui);

app
  .get('/', (ctx) => ctx.json({ name: 'none', build }))
  .notFound((ctx) => ctx.json({ message: 'Not found' }, 404))
  .onError((error, ctx) => {
    let status: number = 500;
    let message: string = 'Internal server error';

    if (error instanceof HTTPException) {
      status = error.status;
      message = error.message;
    } else if (error instanceof v.ValiError) {
      status = 400;
      message = error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    return ctx.json({ message }, status);
  });

export default app;
