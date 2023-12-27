import * as v from 'valibot';

import { ftch, memo, url } from './@internal';

import { getPackageItem } from './npm';

type BundleItem = v.Output<typeof BundleItemSchema>;

const BundleItemSchema = v.object({
  version: v.string(),
  size: v.object({
    size: v.string(),
    type: v.string(),
    rawUncompressedSize: v.number(),
    uncompressedSize: v.string(),
    rawCompressedSize: v.number(),
    compressedSize: v.string(),
  }),
});

const loadBundleItem = memo<BundleItem>();

const api = url('https://deno.bundlejs.com');

const getBundleItem = (name: string): Promise<BundleItem> =>
  loadBundleItem(name, async () => {
    const npm = await getPackageItem(name);

    const external: string[] = [];
    if (npm.dependencies) external.push(...Object.keys(npm.dependencies));
    if (npm.peerDependencies) external.push(...Object.keys(npm.peerDependencies));
    const config = { esbuild: { external } };

    return v.parse(BundleItemSchema, await ftch.get.json(api`/?q=${name}&config=${JSON.stringify(config)}`));
  });

export { getBundleItem };
