import type { Context } from 'hono';
import ky from 'ky';

import * as http from './http';
import * as v from './v';

import { memo } from './utils';

const parseUsername = async (value: unknown) => {
  if (v.is_undefined(value)) throw http.e400('Username is required');
  if (v.is_string(value) && /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,38}$/.test(value) && /^(?!.*-$)[\s\S]*$/.test(value)) return value;
  throw http.e400('Invalid Username');
};

const parseReponame = async (value: unknown) => {
  if (v.is_undefined(value)) throw http.e400('Repository name is required');
  if (v.is_string(value) && /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){1,99}$/.test(value) && /^(?!.*-$)[\s\S]*$/.test(value)) return value;
  throw http.e400('Invalid Repository name');
};

const getValidUsernameParam = (context: Context, key: string = 'user') => parseUsername(context.req.param(key));
const getValidReponameParam = (context: Context, key: string = 'repo') => parseReponame(context.req.param(key));

type RepoItem = {
  name: string;
  full_name: string;
  homepage: string | null;
  forks_count: number;
  stargazers_count: number;
  license?: {
    key: string;
    name: string;
    spdx_id: string;
  } | null;
};
const parseRepoItem = async (value: unknown) => {
  if (v.is_object(value)) {
    if (
      v.is_in_object_and_type('name', value, v.is_string) &&
      v.is_in_object_and_type('full_name', value, v.is_string) &&
      v.is_in_object_and_type('homepage', value, v.is_string_nullable) &&
      v.is_in_object_and_type('forks_count', value, v.is_number) &&
      v.is_in_object_and_type('stargazers_count', value, v.is_number) &&
      v.is_optional_in_object_and_type('license', value, v.is_object_nullable)
    ) {
      if (
        value.license &&
        v.is_in_object_and_type('key', value.license, v.is_string) &&
        v.is_in_object_and_type('name', value.license, v.is_string) &&
        v.is_in_object_and_type('spdx_id', value.license, v.is_string)
      ) {
        const result = {} as RepoItem;
        result.name = value.name;
        result.full_name = value.full_name;
        result.homepage = value.homepage;
        result.forks_count = value.forks_count;
        result.stargazers_count = value.stargazers_count;
        result.license = {
          key: value.license.key,
          name: value.license.name,
          spdx_id: value.license.spdx_id,
        };
        return result;
      } else {
        const result = {} as RepoItem;
        result.name = value.name;
        result.full_name = value.full_name;
        result.homepage = value.homepage;
        result.forks_count = value.forks_count;
        result.stargazers_count = value.stargazers_count;
        result.license = null;
        return result;
      }
    }
  }
  throw http.e400('Invalid repo item');
};

const loadRepoItem = memo<RepoItem>();

const getRepoItem = (user: string, repo: string): Promise<RepoItem> =>
  loadRepoItem([user, repo].join('/'), async () => await parseRepoItem(await ky.get(`https://api.github.com/repos/${user}/${repo}`).json()));

const formatCount = (number: number): string => (number < 1000 ? number.toString() : number < 1000000 ? (number / 1000).toFixed(1) + 'K' : (number / 1000000).toFixed(1) + 'M');

export { parseUsername, parseReponame };
export { getRepoItem };
export { getValidUsernameParam, getValidReponameParam };
export { formatCount };
