import type { Context } from 'hono';
import ky from 'ky';
import { z } from 'zod';

import { memo } from './utils';

const UsernameSchema = z
  .string({ required_error: 'Username is required', invalid_type_error: 'Username must be a string' })
  .regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,38}$/, { message: 'Invalid GitHub username' })
  .regex(/^(?!.*-$)[\s\S]*$/, { message: 'Username cannot end with a hyphen' });

const ReponameSchema = z
  .string({ required_error: 'Repository name is required', invalid_type_error: 'Repository name must be a string' })
  .regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,99}$/, { message: 'Invalid repository name' })
  .regex(/^(?!.*-$)[\s\S]*$/, { message: 'Repository name cannot end with a hyphen' });

const getValidUsernameParam = async (context: Context, key: string = 'user') => await UsernameSchema.parseAsync(context.req.param(key));
const getValidReponameParam = async (context: Context, key: string = 'repo') => await ReponameSchema.parseAsync(context.req.param(key));

type RepoItem = z.infer<typeof RepoItemSchema>;
const RepoItemSchema = z.object({
  name: z.string(),
  full_name: z.string(),
  homepage: z.string().nullable(),
  forks_count: z.number(),
  stargazers_count: z.number(),
  license: z
    .object({
      key: z.string(),
      name: z.string(),
      spdx_id: z.string(),
    })
    .nullable()
    .optional(),
});

const loadRepoItem = memo<RepoItem>();

const getRepoItem = (user: string, repo: string): Promise<RepoItem> =>
  loadRepoItem([user, repo].join('/'), async () => await RepoItemSchema.parseAsync(await ky.get(`https://api.github.com/repos/${user}/${repo}`).json()));

const formatCount = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { UsernameSchema, ReponameSchema };
export { getRepoItem };
export { getValidUsernameParam, getValidReponameParam };
export { formatCount };
