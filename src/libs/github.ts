import * as v from 'valibot';

import { ftch, memo, url } from './@internal';

const UsernameSchema = v.pipe(v.string(), v.regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,38}$/), v.regex(/^(?!.*-$)[\s\S]*$/));

const ReponameSchema = v.pipe(v.string(), v.regex(/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,99}$/), v.regex(/^(?!.*-$)[\s\S]*$/));

const getValidUsernameParam = (param: Record<string, string>, key: string = 'user') => v.parse(UsernameSchema, param[key]);
const getValidReponameParam = (param: Record<string, string>, key: string = 'repo') => v.parse(ReponameSchema, param[key]);

type UserItem = v.InferOutput<typeof UserItemSchema>;

const UserItemSchema = v.looseObject({
  login: v.string(),
  name: v.nullable(v.string()),
  bio: v.nullable(v.string()),
  avatar_url: v.nullable(v.string()),
  public_repos: v.number(),
  public_gists: v.number(),
  followers: v.number(),
  following: v.number(),
});

type RepoItem = v.InferOutput<typeof RepoItemSchema>;

const RepoItemSchema = v.looseObject({
  name: v.string(),
  description: v.nullable(v.string()),
  homepage: v.nullable(v.string()),
  forks_count: v.number(),
  stargazers_count: v.number(),
  license: v.nullable(v.looseObject({ key: v.string(), name: v.string(), spdx_id: v.string() })),
  size: v.number(),
});

const loadUserItem = memo<UserItem>();
const loadRepoItem = memo<RepoItem>();

const api = url('https://api.github.com');

const getUserItem = (user: string): Promise<UserItem> => loadUserItem(user, async () => v.parse(UserItemSchema, await ftch.get.json(api(`/users/${user}`))));
const getRepoItem = (user: string, repo: string): Promise<RepoItem> => loadRepoItem(`${user}/${repo}`, async () => v.parse(RepoItemSchema, await ftch.get.json(api(`/repos/${user}/${repo}`))));

const formatCount = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { UsernameSchema, ReponameSchema };
export { getUserItem, getRepoItem };
export { getValidUsernameParam, getValidReponameParam };
export { formatCount };
