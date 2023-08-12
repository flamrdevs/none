import type { SVGFunction } from './svg';

const svg = (async (context, element) => {
  return await (await import('./svg')).default(context, element);
}) satisfies SVGFunction;

export default svg;
