import * as v from 'valibot';

import type { Component } from '~/libs/svg';

import { tag } from '../../utils';

import icons from './icons';

type SimpleProps = {
  s?: string | number;
  c?: string;
};

type SimpleIcon = keyof typeof icons;

const SimpleIcons = {} as { [key in SimpleIcon]: Component<SimpleProps> };

for (const key in icons) {
  SimpleIcons[key as SimpleIcon] = ({ s = 20, c = 'currentColor' }) => {
    return tag('svg', {
      role: 'img',
      viewBox: '0 0 24 24',
      width: s,
      height: s,
      fill: c,
      stroke: 'none',
      children: tag('path', { d: icons[key as SimpleIcon] }),
    });
  };
}

const ICON = Object.keys(icons) as [SimpleIcon, ...SimpleIcon[]];

const IconSchema = v.optional(v.picklist(ICON, 'Invalid icon'), 'github');
const IconsSchema = v.array(IconSchema);

const parseSimpleIcon = (input: unknown) => v.parse(IconSchema, input);
const parseSimpleIcons = (input: unknown) => v.parse(IconsSchema, input);

const getValidSimpleIconFromQuery = (query: Record<string, string>, key = 'i') => parseSimpleIcon(query[key]);

export type { SimpleProps, SimpleIcon };
export { SimpleIcons, parseSimpleIcon, parseSimpleIcons };
export { getValidSimpleIconFromQuery };
