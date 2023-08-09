import { Hono } from "hono";

const hono = (fn: (hono: Hono) => Hono = (x) => x) => fn(new Hono());

const cache = <T>(dex: number = 24 * 60 * 60 * 1000) => {
  type Item = { e: number; v: T };
  const record: Record<string, Item> = {};
  return {
    get value() {
      return record;
    },
    get(key: string): T | undefined {
      if (key in record) {
        const item = record[key];
        if (item.e > Date.now()) return item.v;
      }
    },
    set(key: string, value: T, ex?: number): T {
      record[key] = { e: Date.now() + (ex ?? dex), v: value };
      return value;
    },
    del(key: string): void {
      delete record[key];
    },
  };
};

const formatSize = ((bytes: number, kb = bytes / 1024, mb = kb / 1024, gb = mb / 1024) =>
  gb >= 1 ? `${gb.toFixed(2)} GB` : mb >= 1 ? `${mb.toFixed(2)} MB` : `${kb.toFixed(2)} KB`) as (bytes: number) => string;

export { cache, formatSize, hono };
