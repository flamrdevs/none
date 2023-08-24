import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { compress } from 'hono/compress';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';

import dayjs from 'dayjs';
import { ZodError } from 'zod';

import * as routes from '~/routes';

const app = new Hono();

const build = dayjs().format();

app.use('*', cors({ origin: '*' }), compress(), secureHeaders({ crossOriginResourcePolicy: false }));

if (process.env.NODE_ENV === 'development') {
  app.use('*', logger());
}

app.route('/npm', routes.npm).route('/bundlejs', routes.bundlejs).route('/ui', routes.ui);

app
  .get('/', (ctx) => ctx.json({ name: 'none', build }))
  .notFound((ctx) => ctx.json({ message: 'Not found' }, 404))
  .onError((error, ctx) => {
    let status: number = 500;
    let message: string = 'Internal server error';

    if (error instanceof ZodError) {
      status = 400;
      message = error.issues.at(0)?.message ?? 'Validation Error';
    } else if (error instanceof Error) {
      message = error.message;
    }

    return ctx.json({ message }, status);
  });

export default app;
