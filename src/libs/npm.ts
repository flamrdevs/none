import * as v from 'valibot';

import * as ftch from './ftch';

import { memo } from './utils';

const PackageNameSchema = v.string([v.regex(/^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/), v.regex(/^(?!.*-$)[\s\S]*$/)]);

const getValidPackageNameParam = (param: Record<string, string>, key: string = 'name') => v.parse(PackageNameSchema, param[key]);

type PackageItem = v.Output<typeof PackageItemSchema>;

const PackageItemSchema = v.object({
  name: v.string(),
  version: v.string(),
  description: v.optional(v.nullable(v.string())),
  license: v.optional(v.nullable(v.string())),
  dependencies: v.optional(v.record(v.string(), v.string())),
  devDependencies: v.optional(v.record(v.string(), v.string())),
  peerDependencies: v.optional(v.record(v.string(), v.string())),
});

type DownloadPointItem = v.Output<typeof DownloadPointItemSchema>;

const DownloadPointItemSchema = v.object({
  package: v.string(),
  start: v.string(),
  end: v.string(),
  downloads: v.number(),
});

const loadPackageItem = memo<PackageItem>();
const loadDownloadPointWeekItem = memo<DownloadPointItem>();
const loadDownloadPointMonthItem = memo<DownloadPointItem>();

const getPackageItem = (name: string): Promise<PackageItem> => loadPackageItem(name, async () => v.parse(PackageItemSchema, await ftch.get.json(`https://registry.npmjs.org/${name}/latest`)));
const getDownloadPointWeekItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointWeekItem(name, async () => v.parse(DownloadPointItemSchema, await ftch.get.json(`https://api.npmjs.org/downloads/point/last-week/${name}`)));
const getDownloadPointMonthItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointMonthItem(name, async () => v.parse(DownloadPointItemSchema, await ftch.get.json(`https://api.npmjs.org/downloads/point/last-month/${name}`)));

const formatDownloads = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { PackageNameSchema };
export { getPackageItem, getDownloadPointWeekItem, getDownloadPointMonthItem };
export { getValidPackageNameParam };
export { formatDownloads };
