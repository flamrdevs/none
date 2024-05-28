import * as v from 'valibot';

const createQueryKeyParser =
  <const T extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>, K extends string>(schema: T, defaultKey: K) =>
  (query: Record<string, string>, key: string = defaultKey) =>
    v.parse(schema, query[key]);

export { createQueryKeyParser };
