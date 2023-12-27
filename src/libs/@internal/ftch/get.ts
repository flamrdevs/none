import * as _ from './core';

const json = async <T = unknown>(url: string) => (await _.json('GET', url)) as T;

export { json };
