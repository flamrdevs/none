import { HTTPException } from 'hono/http-exception';

type Method = 'GET';

const json = async <M extends Method>(method: M, input: RequestInfo) => {
  const res = await fetch(input, { method });
  if (res.ok) return await res.json();
  throw new HTTPException(500, { message: 'Fetch failed' });
};

const get = {
  json: async <T = unknown>(url: string) => (await json('GET', url)) as T,
};

export { get };
