import { HTTPException } from 'hono/http-exception';

export const e400 = (message: string) => new HTTPException(400, { message });
