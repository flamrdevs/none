import * as v from 'valibot';

import type { Component } from '~/libs/svg';

import { tag } from '../../utils';

import icons from './icons';

type LucideProps = {
  s?: string | number;
  c?: string;
};

type LucideIcon = keyof typeof icons;

const LucideIcons = {} as { [key in LucideIcon]: Component<LucideProps> };

for (const key in icons) {
  LucideIcons[key as LucideIcon] = ({ s = 20, c = 'currentColor' }) => {
    return tag('svg', {
      role: 'img',
      viewBox: '0 0 24 24',
      width: s,
      height: s,
      fill: 'none',
      stroke: c,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: icons[key as LucideIcon].map((child) => tag(child[0], child[1])),
    });
  };
}

const ICON = Object.keys(icons) as [LucideIcon, ...LucideIcon[]];

const IconSchema = v.optional(v.picklist(ICON, 'Invalid icon'), 'code');
const IconsSchema = v.array(IconSchema);

const parseLucideIcon = (input: unknown) => v.parse(IconSchema, input);
const parseLucideIcons = (input: unknown) => v.parse(IconsSchema, input);

const getValidLucideIconFromQuery = (query: Record<string, string>, key = 'i') => parseLucideIcon(query[key]);

export type { LucideProps, LucideIcon };
export { LucideIcons, parseLucideIcon, parseLucideIcons };
export { getValidLucideIconFromQuery };
