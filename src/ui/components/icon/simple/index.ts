import * as v from 'valibot';

import type { Component } from '~/libs/image';

import el from '../../el';

import icons from './icons';

type SimpleProps = {
  s?: string | number;
  c?: string;
};

type SimpleIcon = keyof typeof icons;

const SimpleIcons = new Proxy({} as { [key in SimpleIcon]: Component<SimpleProps> }, {
  get(object, key: SimpleIcon) {
    return (object[key] ??= ({ s = 20, c = 'currentColor' }) => {
      return el('svg', {
        role: 'img',
        viewBox: '0 0 24 24',
        width: s,
        height: s,
        fill: c,
        stroke: 'none',
        children: el('path', { d: icons[key] }),
      });
    });
  },
});

const ICON = Object.keys(icons) as [SimpleIcon, ...SimpleIcon[]];

const IconSchema = v.optional(v.picklist(ICON, 'Invalid icon'), 'github');
const IconsSchema = v.array(IconSchema);

const parseSimpleIcon = (input: unknown) => v.parse(IconSchema, input);
const parseSimpleIcons = (input: unknown) => v.parse(IconsSchema, input);

const getValidSimpleIconFromQuery = (query: Record<string, string>, key = 'i') => parseSimpleIcon(query[key]);

export type { SimpleProps, SimpleIcon };
export { SimpleIcons, parseSimpleIcon, parseSimpleIcons };
export { getValidSimpleIconFromQuery };
