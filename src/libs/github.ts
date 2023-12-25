import * as v from 'valibot';

import * as ftch from './ftch';

import { memo } from './utils';

const UsernameSchema = v.string([v.regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,38}$/), v.regex(/^(?!.*-$)[\s\S]*$/)]);

const ReponameSchema = v.string([v.regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,99}$/), v.regex(/^(?!.*-$)[\s\S]*$/)]);

const getValidUsernameParam = (param: Record<string, string>, key: string = 'user') => v.parse(UsernameSchema, param[key]);
const getValidReponameParam = (param: Record<string, string>, key: string = 'repo') => v.parse(ReponameSchema, param[key]);

type RepoItem = v.Output<typeof RepoItemSchema>;

const RepoItemSchema = v.object({
  name: v.string(),
  full_name: v.string(),
  homepage: v.nullable(v.string()),
  forks_count: v.number(),
  stargazers_count: v.number(),
  license: v.optional(
    v.nullable(
      v.object({
        key: v.string(),
        name: v.string(),
        spdx_id: v.string(),
      })
    )
  ),
});

const loadRepoItem = memo<RepoItem>();

const getRepoItem = (user: string, repo: string): Promise<RepoItem> =>
  loadRepoItem([user, repo].join('/'), async () => v.parse(RepoItemSchema, await ftch.get.json(`https://api.github.com/repos/${user}/${repo}`)));

const formatCount = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { UsernameSchema, ReponameSchema };
export { getRepoItem };
export { getValidUsernameParam, getValidReponameParam };
export { formatCount };
