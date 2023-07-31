import fs from "node:fs/promises";

import { Context } from "hono";

import satori, { init } from "satori/wasm";
import type { SatoriOptions } from "satori/wasm";
import initYoga from "yoga-wasm-web";

type Tag = "div" | (string & {});

type SafeProps<P extends Record<string, any>> = P & { [key: string]: any | undefined };

type SafeCSSValue<T extends string | number = string | number> = T | (string & {}) | (number & {});

type CSSProperties = Partial<{
  display: SafeCSSValue<"flex">;
  position: SafeCSSValue<"absolute" | "fixed" | "relative">;
  top: SafeCSSValue;
  right: SafeCSSValue;
  bottom: SafeCSSValue;
  left: SafeCSSValue;
  alignItems: SafeCSSValue<"center">;
  justifyContent: SafeCSSValue<"center">;
  flexDirection: SafeCSSValue<"row" | "column">;
  flexGrow: SafeCSSValue;
  flexShrink: SafeCSSValue;
  flexWrap: SafeCSSValue<"wrap">;
  overflow: SafeCSSValue<"hidden">;
  gap: SafeCSSValue;
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
  height: SafeCSSValue;
  borderColor: SafeCSSValue;
  borderStyle: SafeCSSValue<"solid">;
  borderWidth: SafeCSSValue;
  borderRadius: SafeCSSValue;
  backgroundColor: SafeCSSValue;
  backgroundImage: SafeCSSValue;
  color: SafeCSSValue;
  opacity: SafeCSSValue;
  fontFamily: SafeCSSValue;
  fontSize: SafeCSSValue;
  fontStyle: SafeCSSValue<"normal">;
  fontWeight: SafeCSSValue<300 | 400 | 500 | 600 | 700>;
}>;
type RootCSSProperties = Omit<CSSProperties, "width" | "height"> & { width: number; height: number };

type Children = string | number | Element | Element[];
type PropsWithChildren<P = {}> = P & { children: Children };
type PropsWithOptionalChildren<P = {}> = P & { children?: Children };

type Element = { type: Tag; props: SafeProps<{ children?: Children; style?: CSSProperties }> };
type RootElement = { type: Tag; props: SafeProps<{ children: Children; style: RootCSSProperties }> };

type Component<P extends {} = {}> = (props: P) => Element;
type RootComponent<P extends {} = {}> = (props: P) => RootElement;

type ImgFunction = (element: RootElement) => Promise<string>;
type SVGFunction = (context: Context, query: Record<string, string>, element: () => RootElement) => Promise<Response>;

const tag = <P extends Record<string, any>>(type: Tag, props: P) => ({ type, props });

const img = await (async () => {
  type FontOptions = SatoriOptions["fonts"][number];

  const yoga = await initYoga(await fs.readFile("./assets/yoga.wasm").then((res) => res.buffer));
  init(yoga);

  const font = async (
    name: FontOptions["name"],
    path: string,
    style: FontOptions["style"],
    weight: FontOptions["weight"]
  ): Promise<FontOptions> => ({ name, style, weight, data: await fs.readFile(path) });
  const fonts: FontOptions[] = await Promise.all([
    font("Source Code Pro", "./assets/source-code-pro-300.woff", "normal", 300),
    font("Source Code Pro", "./assets/source-code-pro-400.woff", "normal", 400),
    font("Source Code Pro", "./assets/source-code-pro-500.woff", "normal", 500),
    font("Source Code Pro", "./assets/source-code-pro-600.woff", "normal", 600),
    font("Source Code Pro", "./assets/source-code-pro-700.woff", "normal", 700),
  ]);

  return (async ({ type, props }) => {
    const { width, height } = props.style;
    (props.style.width = props.style.height = "100%" as unknown as number),
      (props.style.fontFamily = "Source Code Pro"),
      (props.style.fontSize = 16),
      (props.style.fontStyle = "normal"),
      (props.style.fontWeight = 400);
    return await satori({ type, props, key: "img" }, { fonts, width, height });
  }) as ImgFunction;
})();

const svg = await (async () => {
  type Item = { e: number; s: string };
  const store: Record<string, Item> = {};
  return (async (context, query, element) => {
    let headers: Record<string, string> = {
      "content-type": "image/svg+xml",
      "x-cache": "true",
    };
    let item: Item;
    let key = `&`;
    let k: string, v: string;
    for (k in query) {
      v = query[k];
      if (typeof v !== "undefined") key += `${k}=${v}&`;
    }
    if (key in store) {
      item = store[key];
      if (item.e > Date.now()) {
        headers["cache-control"] = `public; max-age=${process.env.NODE_ENV === "production" ? 86400 : 0}`;
        return context.body(item.s, 200, headers);
      }
    }
    headers["x-cache"] = "false";
    store[key] = item = { e: Date.now() + 86400000, s: await img(element()) };
    return context.body(item.s, 200, headers);
  }) as SVGFunction;
})();

export type { PropsWithChildren, PropsWithOptionalChildren, Element, RootElement, Component, RootComponent };
export { tag, img };
export default svg;
