import type { Context } from 'hono';
import ky from 'ky';
import { z } from 'zod';

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

const getValidPackageNameQuery = async (context: Context, key: string = 'n') => await PackageNameSchema.parseAsync(context.req.query(key));

type PackageItem = z.infer<typeof PackageItemSchema>;
const PackageItemSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string().optional(),
  license: z.string().optional(),
});

const $PackageItem: Record<string, PackageItem> = {};

const getPackageItem = async (name: string): Promise<PackageItem> => ($PackageItem[name] ??= await PackageItemSchema.parseAsync(await ky.get(`https://registry.npmjs.org/${name}/latest`).json()));

export { PackageNameSchema };
export { getPackageItem };
export { getValidPackageNameQuery };
