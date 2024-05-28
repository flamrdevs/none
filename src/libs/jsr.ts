import * as v from 'valibot';

import { ftch, memo, url } from './@internal';

const PackageNameSchema = v.pipe(v.string(), v.regex(/^@[a-z0-9-~][a-z0-9-._~]*\/[a-z0-9-~][a-z0-9-._~]*$/), v.regex(/^(?!.*-$)[\s\S]*$/));

const getValidPackageNameParam = (param: Record<string, string>, key: string = 'name') => v.parse(PackageNameSchema, param[key]);

type PackageItem = v.InferOutput<typeof PackageItemSchema>;

const PackageItemSchema = v.looseObject({
  scope: v.string(),
  name: v.string(),
  latest: v.string(),
});

const loadPackageItem = memo<PackageItem>();

const registry = url('https://jsr.io');

const getPackageItem = (name: string): Promise<PackageItem> => loadPackageItem(name, async () => v.parse(PackageItemSchema, await ftch.get.json(registry`/${name}/meta.json`, { Accept: 'json' })));

export type { PackageItem };
export { PackageNameSchema };
export { getPackageItem };
export { getValidPackageNameParam };
