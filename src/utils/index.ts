import { Hono } from "hono";

const hono = (fn: (hono: Hono) => Hono = (x) => x) => fn(new Hono());

const cache = <T>(dex: number = 24 * 60 * 60 * 1000) => {
  type Item = { e: number; v: T };
  const record: Record<string, Item> = {};
  return {
    get(key: string): T | undefined {
      if (key in record) {
        const item = record[key];
        if (item.e > Date.now()) return item.v;
      }
    },
    set(key: string, value: T, ex?: number) {
      record[key] = { e: Date.now() + (ex ?? dex), v: value };
      return value;
    },
  };
};

export { cache, hono };
