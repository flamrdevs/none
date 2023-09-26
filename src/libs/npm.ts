import type { Context } from 'hono';
import ky from 'ky';

import * as http from './http';
import * as v from './v';

import { memo } from './utils';

const parsePackageName = async (value: unknown) => {
  if (v.is_undefined(value)) throw http.e400('Package name is required');
  if (v.is_string(value) && /^(?:@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(value) && /^(?!.*-$)[\s\S]*$/.test(value)) return value;
  throw http.e400('Invalid package name');
};

const getValidPackageNameParam = (context: Context, key: string = 'name') => parsePackageName(context.req.param(key));

type PackageItem = {
  name: string;
  version: string;
  description?: string | null;
  license?: string | null;
};
const parsePackageItem = async (value: unknown) => {
  if (v.is_object(value)) {
    if (
      v.is_in_object_and_type('name', value, v.is_string) &&
      v.is_in_object_and_type('version', value, v.is_string) &&
      v.is_in_object_and_type('description', value, v.is_string_nullable) &&
      v.is_optional_in_object_and_type('license', value, v.is_string_nullable)
    ) {
      const result = {} as PackageItem;
      result.name = value.name;
      result.version = value.version;
      result.description = value.description;
      result.license = value.license;
      return result;
    }
  }
  throw http.e400('Invalid package name item');
};

type DownloadPointItem = {
  package: string;
  start: string;
  end: string;
  downloads: number;
};
const parseDownloadPointItem = async (value: unknown) => {
  if (v.is_object(value)) {
    if (
      v.is_in_object_and_type('package', value, v.is_string) &&
      v.is_in_object_and_type('start', value, v.is_string) &&
      v.is_in_object_and_type('end', value, v.is_string) &&
      v.is_in_object_and_type('downloads', value, v.is_number)
    ) {
      const result = {} as DownloadPointItem;
      result.package = value.package;
      result.start = value.start;
      result.end = value.end;
      result.downloads = value.downloads;
      return result;
    }
  }
  throw http.e400('Invalid download point item');
};

const loadPackageItem = memo<PackageItem>();
const loadDownloadPointWeekItem = memo<DownloadPointItem>();
const loadDownloadPointMonthItem = memo<DownloadPointItem>();

const getPackageItem = (name: string): Promise<PackageItem> => loadPackageItem(name, async () => await parsePackageItem(await ky.get(`https://registry.npmjs.org/${name}/latest`).json()));
const getDownloadPointWeekItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointWeekItem(name, async () => await parseDownloadPointItem(await ky.get(`https://api.npmjs.org/downloads/point/last-week/${name}`).json()));
const getDownloadPointMonthItem = (name: string): Promise<DownloadPointItem> =>
  loadDownloadPointMonthItem(name, async () => await parseDownloadPointItem(await ky.get(`https://api.npmjs.org/downloads/point/last-month/${name}`).json()));

const formatDownloads = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { parsePackageName };
export { getPackageItem, getDownloadPointWeekItem, getDownloadPointMonthItem };
export { getValidPackageNameParam };
export { formatDownloads };
