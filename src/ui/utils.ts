import type { Context } from 'hono';

import * as http from '~/libs/http';

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

const parseColor = async (value: unknown = COLOR_DEFAULT) => {
  if (COLOR.includes(`${value}` as any)) return value as Color;
  throw http.e400('Invalid color');
};
const parseTheme = async (value: unknown = THEME_DEFAULT) => {
  if (THEME.includes(`${value}` as any)) return value as Theme;
  throw http.e400('Invalid theme');
};

const getValidColorQuery = (context: Context) => parseColor(context.req.query('c'));
const getValidThemeQuery = (context: Context) => parseTheme(context.req.query('t'));

export { parseColor, parseTheme };
export { select };
export { getValidColorQuery, getValidThemeQuery };
