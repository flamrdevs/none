import { Hono } from 'hono';

const hono = (fn: (hono: Hono) => Hono = (x) => x) => fn(new Hono());

const memocache = <T>() => {
  const record: Record<string, T> = {};
  return {
    get: (key: string): T | undefined => (key in record ? record[key] : undefined),
    set: (key: string, value: T): T => (record[key] = value),
  };
};

const format = {
  size: ((bytes: number, kb = bytes / 1024, mb = kb / 1024, gb = mb / 1024) => (gb >= 1 ? `${gb.toFixed(2)} GB` : mb >= 1 ? `${mb.toFixed(2)} MB` : `${kb.toFixed(2)} KB`)) as (
    bytes: number
  ) => string,
};

export { memocache, format, hono };
