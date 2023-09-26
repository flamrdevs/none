import ky from 'ky';

import * as http from './http';
import * as v from './v';

import { memo } from './utils';

type BundleItem = {
  version: string;
  size: {
    size: string;
    type: string;
    rawUncompressedSize: number;
    uncompressedSize: string;
    rawCompressedSize: number;
    compressedSize: string;
  };
};
const parseBundleItem = async (value: unknown) => {
  if (v.is_object(value)) {
    if (v.is_in_object_and_type('version', value, v.is_string) && v.is_in_object_and_type('size', value, v.is_object)) {
      if (
        v.is_in_object_and_type('size', value.size, v.is_string) &&
        v.is_in_object_and_type('type', value.size, v.is_string) &&
        v.is_in_object_and_type('rawUncompressedSize', value.size, v.is_number) &&
        v.is_in_object_and_type('uncompressedSize', value.size, v.is_string) &&
        v.is_in_object_and_type('rawCompressedSize', value.size, v.is_number) &&
        v.is_in_object_and_type('compressedSize', value.size, v.is_string)
      ) {
        const result = {} as BundleItem;
        result.version = value.version;
        result.size = {
          size: value.size.size,
          type: value.size.type,
          rawUncompressedSize: value.size.rawUncompressedSize,
          uncompressedSize: value.size.uncompressedSize,
          rawCompressedSize: value.size.rawCompressedSize,
          compressedSize: value.size.compressedSize,
        };
        return result;
      }
    }
  }
  throw http.e400('Invalid bundle item');
};

const loadBundleItem = memo<BundleItem>();

const getBundleItem = (name: string): Promise<BundleItem> => loadBundleItem(name, async () => await parseBundleItem(await ky.get(`https://deno.bundlejs.com/?q=${name}`).json()));

export { getBundleItem };
