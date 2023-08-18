import type { SVGFunction } from './svg';

const bundlejs = () => import('./bundlejs');

const npm = () => import('./npm');

const svg = (async (context, element) => await (await import('./svg')).default(context, element)) satisfies SVGFunction;

export { bundlejs, npm, svg };
