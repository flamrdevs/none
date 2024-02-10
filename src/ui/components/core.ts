import type { Children, RootComponent } from '~/libs/image';

import * as el from './el';
import { select } from '../style';
import type { BaseProps, SizeProps } from './types';

const validSizeValue = (val: unknown, min: number) => (typeof val !== 'number' || isNaN(val) || val < min ? min : val);

const calcBadgeWidth = (str: string) => str.length * 9 + 11;
const calcBadgeIconWidth = (str: string) => str.length * 9 + 24;

const Badge: RootComponent<BaseProps & SizeProps & { children: Children }> = ({ c, t, w, h, children }) => {
  const color = select(c, t);

  return el.div({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: validSizeValue(w, 20),
      height: validSizeValue(h, 20),
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
  return el.div({
    style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingRight: 1 },
    children: [el.div({ style: { display: 'flex' }, children: c }), el.div({ style: { display: 'flex' }, children: e })],
  });
};

const calcButtonWidth = (str: string) => str.length * 10 + 44;
const calcButtonIconWidth = (str: string) => str.length * 10 + 58;

const Button: RootComponent<BaseProps & SizeProps & { children: Children }> = ({ c, t, w, h, children }) => {
  const color = select(c, t);

  return el.div({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.1rem 0.4rem',
      width: validSizeValue(w, 32),
      height: validSizeValue(h, 32),
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
  return el.div({
    style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, paddingRight: 2 },
    children: [el.div({ style: { display: 'flex' }, children: c }), el.div({ style: { display: 'flex' }, children: e })],
  });
};

const Icon: RootComponent<BaseProps & SizeProps & { children: Children }> = ({ c, t, w, h, children }) => {
  const color = select(c, t);

  return el.div({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: validSizeValue(w, 22),
      height: validSizeValue(h, 22),
      color: color[11],
    },
    children,
  });
};

export { Badge, BadgeChildIcon, Button, ButtonChildIcon, Icon };
export { calcBadgeWidth, calcBadgeIconWidth, calcButtonIconWidth, calcButtonWidth };
