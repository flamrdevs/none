import type { Tag, CSSProperties, Children } from '~/libs/image';

import type { Color, Theme } from '../utils/colors';

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
