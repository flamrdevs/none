import type { Context } from 'hono';
import ky from 'ky';
import { z } from 'zod';

import { memo } from './utils';

const PackageNameSchema = z
  .string({
    required_error: 'Package name is required',
    invalid_type_error: 'Package name must be a string',
  })
  .regex(/^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/, {
    message: 'Invalid NPM package name',
  })
  .regex(/^(?!.*-$)[\s\S]*$/, {
    message: 'Package name cannot end with a hyphen',
  });

const getValidPackageNameParam = async (context: Context, key: string = 'name') => await PackageNameSchema.parseAsync(context.req.param(key));

type PackageItem = z.infer<typeof PackageItemSchema>;
const PackageItemSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string().nullable().optional(),
  license: z.string().nullable().optional(),
});

type DownloadPointItem = z.infer<typeof DownloadPointItemSchema>;
const DownloadPointItemSchema = z.object({
  package: z.string(),
  start: z.string(),
  end: z.string(),
  downloads: z.number(),
});

const loadPackageItem = memo<PackageItem>();
const loadDownloadPointWeekItem = memo<DownloadPointItem>();
const loadDownloadPointMonthItem = memo<DownloadPointItem>();

const getPackageItem = (name: string): Promise<PackageItem> => loadPackageItem(name, async () => await PackageItemSchema.parseAsync(await ky.get(`https://registry.npmjs.org/${name}/latest`).json()));
const getDownloadPointWeekItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointWeekItem(name, async () => await DownloadPointItemSchema.parseAsync(await ky.get(`https://api.npmjs.org/downloads/point/last-week/${name}`).json()));
const getDownloadPointMonthItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointMonthItem(name, async () => await DownloadPointItemSchema.parseAsync(await ky.get(`https://api.npmjs.org/downloads/point/last-month/${name}`).json()));

const formatDownloads = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { PackageNameSchema };
export { getPackageItem, getDownloadPointWeekItem, getDownloadPointMonthItem };
export { getValidPackageNameParam };
export { formatDownloads };
