import * as v from 'valibot';

import { ftch, memo, url } from './@internal';

const PackageNameSchema = v.pipe(v.string(), v.regex(/^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/), v.regex(/^(?!.*-$)[\s\S]*$/));

const getValidPackageNameParam = (param: Record<string, string>, key: string = 'name') => v.parse(PackageNameSchema, param[key]);

type PackageItem = v.InferOutput<typeof PackageItemSchema>;

const PackageItemSchema = v.looseObject({
  name: v.string(),
  version: v.string(),
  description: v.optional(v.nullable(v.string())),
  license: v.optional(v.nullable(v.string())),
  dependencies: v.optional(v.record(v.string(), v.string())),
  devDependencies: v.optional(v.record(v.string(), v.string())),
  peerDependencies: v.optional(v.record(v.string(), v.string())),
});

type DownloadPointItem = v.InferOutput<typeof DownloadPointItemSchema>;

const DownloadPointItemSchema = v.looseObject({
  package: v.string(),
  start: v.string(),
  end: v.string(),
  downloads: v.number(),
});

type DownloadRangeItem = v.InferOutput<typeof DownloadRangeItemSchema>;

const DownloadRangeItemSchema = v.looseObject({
  package: v.string(),
  start: v.string(),
  end: v.string(),
  downloads: v.array(
    v.looseObject({
      downloads: v.number(),
      day: v.string(),
    })
  ),
});

const loadPackageItem = memo<PackageItem>();
const loadDownloadPointWeekItem = memo<DownloadPointItem>();
const loadDownloadPointMonthItem = memo<DownloadPointItem>();
const loadDownloadRangeWeekItem = memo<DownloadRangeItem>();
const loadDownloadRangeMonthItem = memo<DownloadRangeItem>();

const registry = url('https://registry.npmjs.org');
const api = url('https://api.npmjs.org');

const getPackageItem = (name: string): Promise<PackageItem> => loadPackageItem(name, async () => v.parse(PackageItemSchema, await ftch.get.json(registry(`/${name}/latest`))));
const getDownloadPointWeekItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointWeekItem(name, async () => v.parse(DownloadPointItemSchema, await ftch.get.json(api(`/downloads/point/last-week/${name}`))));
const getDownloadPointMonthItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointMonthItem(name, async () => v.parse(DownloadPointItemSchema, await ftch.get.json(api(`/downloads/point/last-month/${name}`))));
const getDownloadRangeWeekItem = (name: string): Promise<DownloadRangeItem> =>
  loadDownloadRangeWeekItem(name, async () => v.parse(DownloadRangeItemSchema, await ftch.get.json(api(`/downloads/range/last-week/${name}`))));
const getDownloadRangeMonthItem = (name: string): Promise<DownloadRangeItem> =>
  loadDownloadRangeMonthItem(name, async () => v.parse(DownloadRangeItemSchema, await ftch.get.json(api(`/downloads/range/last-month/${name}`))));

const formatDownloads = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export type { PackageItem, DownloadPointItem, DownloadRangeItem };
export { PackageNameSchema };
export { getPackageItem, getDownloadPointWeekItem, getDownloadPointMonthItem, getDownloadRangeWeekItem, getDownloadRangeMonthItem };
export { getValidPackageNameParam };
export { formatDownloads };
