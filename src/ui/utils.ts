import type { Context } from 'hono';
import * as v from 'valibot';

import COLORS from './colors';
import type { Color, ColorObject, Theme } from './colors';

const COLOR = Object.keys(COLORS) as unknown as [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'orange',
  'brown',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'bronze',
  'gold'
];
const COLOR_DEFAULT = 'gray' satisfies Color;

const THEME = ['dark', 'light'] as const satisfies readonly Theme[];
const THEME_DEFAULT = 'dark' satisfies Theme;

const select = (color: Color = COLOR_DEFAULT, theme: Theme = THEME_DEFAULT): ColorObject => COLORS[color][theme];

const ColorSchema = v.optional(v.picklist(COLOR), COLOR_DEFAULT);

const ThemeSchema = v.optional(v.picklist(THEME), THEME_DEFAULT);

const getValidColorQuery = (context: Context) => v.parse(ColorSchema, context.req.query('c'));
const getValidThemeQuery = (context: Context) => v.parse(ThemeSchema, context.req.query('t'));

export { select };
export { getValidColorQuery, getValidThemeQuery };
