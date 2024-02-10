import * as v from 'valibot';

import type { Component } from '~/libs/image';

import * as el from '../../el';

import icons from './icons';

type LucideProps = {
  s?: string | number;
  c?: string;
};

type LucideIcon = keyof typeof icons;

const mapFn = (child: (typeof icons)[LucideIcon][number]) => el.create(child[0], child[1]);

const LucideIcons = new Proxy({} as { [key in LucideIcon]: Component<LucideProps> }, {
  get(object, key: LucideIcon) {
    return (object[key] ??= ({ s = 20, c = 'currentColor' }) => {
      return el.svg({
        role: 'img',
        viewBox: '0 0 24 24',
        width: s,
        height: s,
        fill: 'none',
        stroke: c,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        children: icons[key].map(mapFn),
      });
    });
  },
});

const ICON = Object.keys(icons) as [LucideIcon, ...LucideIcon[]];

const IconSchema = v.optional(v.picklist(ICON, 'Invalid icon'), 'code');
const IconsSchema = v.array(IconSchema);

const parseLucideIcon = (input: unknown) => v.parse(IconSchema, input);
const parseLucideIcons = (input: unknown) => v.parse(IconsSchema, input);

const getValidLucideIconFromQuery = (query: Record<string, string>, key = 'i') => parseLucideIcon(query[key]);

export type { LucideProps, LucideIcon };
export { LucideIcons, parseLucideIcon, parseLucideIcons };
export { getValidLucideIconFromQuery };
