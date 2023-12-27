import * as v from 'valibot';

const createQueryKeyParser =
  <T extends v.BaseSchema, K extends string>(schema: T, defaultKey: K) =>
  (query: Record<string, string>, key: string = defaultKey) =>
    v.parse(schema, query[key]);

export { createQueryKeyParser };
