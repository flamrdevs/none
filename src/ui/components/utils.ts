import type { Tag, CSSProperties, Children } from '~/libs/svg';

import type { Color, Theme } from '../colors';

type BaseProps = {
  /**
   * color
   */
  c?: Color;
  /**
   * theme
   */
  t?: Theme;
};

type SizeProps = {
  /**
   * width
   */
  w?: number;
  /**
   * height
   */
  h?: number;
};

const tag = <P extends { style?: CSSProperties; children?: Children } & { [key: string]: unknown }>(type: Tag, props: P) => ({ type, props });

export type { BaseProps, SizeProps };
export { tag };
