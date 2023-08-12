import ky from 'ky';
import { z } from 'zod';

type BundleItem = z.infer<typeof BundleItemSchema>;
const BundleItemSchema = z.object({
  version: z.string(),
  size: z.object({
    type: z.string(),
    rawUncompressedSize: z.number(),
    uncompressedSize: z.string(),
    rawCompressedSize: z.number(),
    compressedSize: z.string(),
    size: z.string(),
  }),
});

const $BundleItem: Record<string, BundleItem> = {};

const getBundleItem = async (name: string): Promise<BundleItem> => ($BundleItem[name] ??= await BundleItemSchema.parseAsync(await ky.get(`https://deno.bundlejs.com/?q=${name}`).json()));

export { getBundleItem };
