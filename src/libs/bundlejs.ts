import ky from 'ky';
import * as v from 'valibot';

import { memo } from './utils';

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

const getBundleItem = (name: string): Promise<BundleItem> => loadBundleItem(name, async () => v.parse(BundleItemSchema, await ky.get(`https://deno.bundlejs.com/?q=${name}`).json()));

export { getBundleItem };
