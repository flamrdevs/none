import type { Children, RootComponent } from '~/libs/image';

import { tag } from './utils';
import type { BaseProps, SizeProps } from './utils';
import { select } from '../utils';

const calcBadgeWidth = (str: string) => str.length * 9 + 11;
const calcBadgeIconWidth = (str: string) => str.length * 9 + 24;

const Badge: RootComponent<BaseProps & SizeProps & { children: Children }> = ({ c, t, w, h, children }) => {
  const color = select(c, t);

  const width = 20;
  const height = 20;

  return tag('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: typeof w !== 'number' || isNaN(w) || w < width ? width : w,
      height: typeof h !== 'number' || isNaN(h) || h < height ? height : h,
      backgroundImage: `linear-gradient(135deg, ${color[4]}, ${color[3]}, ${color[2]})`,
      color: color[11],
      border: `1px solid ${color[7]}`,
      borderRadius: '0.6rem',
      fontSize: 14,
      fontWeight: 500,
    },
    children,
  });
};

const BadgeChildIcon = ({ c, e }: { c: Children; e: string }) => {
  return tag('div', {
    style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 1 },
    children: [tag('div', { style: { display: 'flex' }, children: c }), tag('div', { style: { display: 'flex' }, children: e })],
  });
};

const calcButtonWidth = (str: string) => str.length * 10 + 44;
const calcButtonIconWidth = (str: string) => str.length * 10 + 58;

const Button: RootComponent<BaseProps & SizeProps & { children: Children }> = ({ c, t, w, h, children }) => {
  const color = select(c, t);

  const width = 32;
  const height = 32;

  return tag('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.1rem 0.4rem',
      width: typeof w !== 'number' || isNaN(w) || w < width ? width : w,
      height: typeof h !== 'number' || isNaN(h) || h < height ? height : h,
      backgroundImage: `linear-gradient(135deg, ${color[4]}, ${color[3]}, ${color[2]})`,
      color: color[11],
      border: `1px solid ${color[7]}`,
      borderRadius: '0.6rem',
      fontSize: 16,
      fontWeight: 500,
    },
    children,
  });
};

const ButtonChildIcon = ({ c, e }: { c: Children; e: string }) => {
  return tag('div', {
    style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, paddingRight: 2 },
    children: [tag('div', { style: { display: 'flex' }, children: c }), tag('div', { style: { display: 'flex' }, children: e })],
  });
};

const Icon: RootComponent<BaseProps & SizeProps & { children: Children }> = ({ c, t, w, h, children }) => {
  const color = select(c, t);

  const width = 22;
  const height = 22;

  return tag('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: typeof w !== 'number' || isNaN(w) || w < width ? width : w,
      height: typeof h !== 'number' || isNaN(h) || h < height ? height : h,
      color: color[11],
    },
    children,
  });
};

export { Badge, BadgeChildIcon, Button, ButtonChildIcon, Icon };
export { calcBadgeWidth, calcBadgeIconWidth, calcButtonIconWidth, calcButtonWidth };
