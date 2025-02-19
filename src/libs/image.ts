import fs from 'node:fs/promises';

import satori from 'satori';
import type { Font } from 'satori';

type Tag = 'div' | 'span' | 'svg' | (string & {});

type SafeProps<P extends Record<string, unknown>> = P & { [key: string]: unknown };

type SafeCSSValue<T extends string | number = string | number> = T | (string & {}) | (number & {});

type CSSProperties = Partial<{
  display: 'none' | 'flex';
  position: 'absolute' | 'relative';
  top: SafeCSSValue;
  right: SafeCSSValue;
  bottom: SafeCSSValue;
  left: SafeCSSValue;
  justifyContent: SafeCSSValue<'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'>;
  alignItems: 'normal' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow: SafeCSSValue;
  flexShrink: SafeCSSValue;
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap: SafeCSSValue;
  overflow: 'visible' | 'hidden';
  margin: SafeCSSValue;
  marginTop: SafeCSSValue;
  marginRight: SafeCSSValue;
  marginBottom: SafeCSSValue;
  marginLeft: SafeCSSValue;
  padding: SafeCSSValue;
  paddingTop: SafeCSSValue;
  paddingRight: SafeCSSValue;
  paddingBottom: SafeCSSValue;
  paddingLeft: SafeCSSValue;
  width: SafeCSSValue;
  minWidth: SafeCSSValue;
  maxWidth: SafeCSSValue;
  height: SafeCSSValue;
  minHeight: SafeCSSValue;
  maxHeight: SafeCSSValue;
  border: SafeCSSValue;
  borderColor: SafeCSSValue;
  borderTopColor: SafeCSSValue;
  borderBottomColor: SafeCSSValue;
  borderRightColor: SafeCSSValue;
  borderLeftColor: SafeCSSValue;
  borderStyle: 'solid' | 'dashed';
  borderTopStyle: 'solid' | 'dashed';
  borderBottomStyle: 'solid' | 'dashed';
  borderRightStyle: 'solid' | 'dashed';
  borderLeftStyle: 'solid' | 'dashed';
  borderWidth: SafeCSSValue;
  borderTopWidth: SafeCSSValue;
  borderBottomWidth: SafeCSSValue;
  borderRightWidth: SafeCSSValue;
  borderLeftWidth: SafeCSSValue;
  borderRadius: SafeCSSValue;
  borderTopLeftRadius: SafeCSSValue;
  borderTopRightRadius: SafeCSSValue;
  borderBottomLeftRadius: SafeCSSValue;
  borderBottomRightRadius: SafeCSSValue;
  backgroundColor: SafeCSSValue;
  backgroundImage: SafeCSSValue;
  backgroundPosition: SafeCSSValue;
  backgroundSize: SafeCSSValue;
  backgroundClip: 'border-box' | 'text';
  backgroundRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
  color: SafeCSSValue<'currentcolor'>;
  opacity: SafeCSSValue;
  fontFamily: SafeCSSValue;
  fontSize: SafeCSSValue;
  fontStyle: SafeCSSValue<'normal'>;
  fontWeight: SafeCSSValue<300 | 400 | 500 | 600 | 700>;
  textAlign: 'start' | 'end' | 'center' | 'left' | 'right' | 'justiy';
  textTransform: 'none' | 'lowercase' | 'uppercase' | 'capitalize';
  textOverflow: 'clip' | 'ellipsis';
  textDecoration: SafeCSSValue<'underline' | 'line-through'>;
  textShadow: SafeCSSValue;
  textWrap: 'wrap' | 'balance';
  lineHeight: SafeCSSValue;
  filter: SafeCSSValue;
  boxShadow: SafeCSSValue;
  lineClamp: SafeCSSValue;
  transform: SafeCSSValue;
  translate: SafeCSSValue;
  translateX: SafeCSSValue;
  translateY: SafeCSSValue;
  rotate: SafeCSSValue;
  scale: SafeCSSValue;
  scaleX: SafeCSSValue;
  scaleY: SafeCSSValue;
  skew: SafeCSSValue;
  skewX: SafeCSSValue;
  skewY: SafeCSSValue;
  maskImage: SafeCSSValue;
  maskPosition: SafeCSSValue;
  maskSize: SafeCSSValue;
  maskRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
}>;
type RootCSSProperties = Omit<CSSProperties, 'width' | 'height'> & { width: number; height: number };

type Children = string | number | Element | Element[];
type PropsWithChildren<P = {}> = P & { children?: Children };

type Element = { type: Tag; props: SafeProps<{ children?: Children; style?: CSSProperties }> };
type RootElement = { type: Tag; props: SafeProps<{ children: Children; style: RootCSSProperties }> };

type Component<P extends {} = {}> = (props: P) => Element;
type RootComponent<P extends {} = {}> = (props: P) => RootElement;

type SVGFunction = (element: RootElement) => Promise<string>;

const font = async (name: Font['name'], path: string, style: Font['style'], weight: Font['weight']): Promise<Font> => ({
  name,
  style,
  weight,
  data: await fs.readFile(path),
});
const fonts: Font[] = await Promise.all([
  font('Source Code Pro', './assets/source-code-pro-300.woff', 'normal', 300),
  font('Source Code Pro', './assets/source-code-pro-400.woff', 'normal', 400),
  font('Source Code Pro', './assets/source-code-pro-500.woff', 'normal', 500),
  font('Source Code Pro', './assets/source-code-pro-600.woff', 'normal', 600),
  font('Source Code Pro', './assets/source-code-pro-700.woff', 'normal', 700),
]);

const svg = (async ({ type, props }) => {
  const { width, height } = props.style;
  props.style.width = props.style.height = '100%' as unknown as number;
  if (typeof props.style.fontFamily === 'undefined') props.style.fontFamily = 'Source Code Pro';
  if (typeof props.style.fontSize === 'undefined') props.style.fontSize = 16;
  if (typeof props.style.fontStyle === 'undefined') props.style.fontStyle = 'normal';
  if (typeof props.style.fontWeight === 'undefined') props.style.fontWeight = 400;
  return await satori({ type, props, key: 'svg' }, { fonts, width, height });
}) as SVGFunction;

export type { Tag, CSSProperties, Children, Component, Element, PropsWithChildren, RootComponent, RootElement, SVGFunction };
export { svg };
