import * as _ from './core';

const json = async <T = unknown>(url: string, headers?: HeadersInit) => (await _.json('GET', url, headers)) as T;

export { json };
