import type { Color, Theme } from '../style';

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

export type { BaseProps, SizeProps };
