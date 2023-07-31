import * as si from "simple-icons";
import { z } from "zod";

import { tag } from "~/libs/svg";
import type {
  Component,
  Element,
  PropsWithChildren,
  RootComponent,
} from "~/libs/svg";

import type { Color, Theme } from "./colors";
import { select } from "./utils";

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

const Badge: RootComponent<PropsWithChildren<BaseProps & SizeProps>> = (
  { c, t, w, h, children },
) => {
  const color = select(c, t);

  const width = 20;
  const height = 20;

  return tag("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: typeof w !== "number" || isNaN(w) || w < width ? width : w,
      height: typeof h !== "number" || isNaN(h) || h < height ? height : h,
      backgroundImage: `linear-gradient(135deg, ${color[4]}, ${color[3]}, ${
        color[2]
      })`,
      color: color[11],
      border: `1px solid ${color[7]}`,
      borderRadius: "0.6rem",
      fontSize: 14,
      fontWeight: 500,
    },
    children,
  });
};

const Button: RootComponent<PropsWithChildren<BaseProps & SizeProps>> = (
  { c, t, w, h, children },
) => {
  const color = select(c, t);

  const width = 32;
  const height = 32;

  return tag("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.1rem 0.4rem",
      width: typeof w !== "number" || isNaN(w) || w < width ? width : w,
      height: typeof h !== "number" || isNaN(h) || h < height ? height : h,
      backgroundImage: `linear-gradient(135deg, ${color[4]}, ${color[3]}, ${
        color[2]
      })`,
      color: color[11],
      border: `1px solid ${color[7]}`,
      borderRadius: "0.6rem",
      fontSize: 16,
      fontWeight: 500,
    },
    children,
  });
};

const Icon: RootComponent<PropsWithChildren<BaseProps & SizeProps>> = (
  { c, t, w, h, children },
) => {
  const color = select(c, t);

  const width = 22;
  const height = 22;

  return tag("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: typeof w !== "number" || isNaN(w) || w < width ? width : w,
      height: typeof h !== "number" || isNaN(h) || h < height ? height : h,
      color: color[11],
    },
    children,
  });
};

const createLucideIcon = (
  children: Element[],
): Component<{
  s?: string | number;
  c?: string;
}> =>
({ s = 20, c = "currentColor" }) => {
  return tag("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    width: s,
    height: s,
    fill: "none",
    stroke: c,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children,
  });
};

const LucideIcons = {
  activity: createLucideIcon([tag("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })]),
  "bar-chart": createLucideIcon([
    tag("line", { x1: "12", x2: "12", y1: "20", y2: "10" }),
    tag("line", { x1: "18", x2: "18", y1: "20", y2: "4" }),
    tag("line", { x1: "6", x2: "6", y1: "20", y2: "16" }),
  ]),
  code: createLucideIcon([
    tag("polyline", { points: "16 18 22 12 16 6" }),
    tag("polyline", { points: "8 6 2 12 8 18" }),
  ]),
  coffee: createLucideIcon([
    tag("path", { d: "M17 8h1a4 4 0 1 1 0 8h-1" }),
    tag("path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" }),
    tag("line", { x1: "6", x2: "6", y1: "2", y2: "4" }),
    tag("line", { x1: "10", x2: "10", y1: "2", y2: "4" }),
    tag("line", { x1: "14", x2: "14", y1: "2", y2: "4" }),
  ]),
  command: createLucideIcon([
    tag("path", {
      d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
    }),
  ]),
  compass: createLucideIcon([
    tag("circle", { cx: "12", cy: "12", r: "10" }),
    tag("polygon", {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
    }),
  ]),
  component: createLucideIcon([
    tag("path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" }),
    tag("path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }),
    tag("path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" }),
    tag("path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" }),
  ]),
  construction: createLucideIcon([
    tag("rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }),
    tag("path", { d: "M17 14v7" }),
    tag("path", { d: "M7 14v7" }),
    tag("path", { d: "M17 3v3" }),
    tag("path", { d: "M7 3v3" }),
    tag("path", { d: "M10 14 2.3 6.3" }),
    tag("path", { d: "m14 6 7.7 7.7" }),
    tag("path", { d: "m8 6 8 8" }),
  ]),
  copyright: createLucideIcon([
    tag("circle", { cx: "12", cy: "12", r: "10" }),
    tag("path", { d: "M15 9.354a4 4 0 1 0 0 5.292" }),
  ]),
  cpu: createLucideIcon([
    tag("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }),
    tag("rect", { x: "9", y: "9", width: "6", height: "6" }),
    tag("path", { d: "M15 2v2" }),
    tag("path", { d: "M15 20v2" }),
    tag("path", { d: "M2 15h2" }),
    tag("path", { d: "M2 9h2" }),
    tag("path", { d: "M20 15h2" }),
    tag("path", { d: "M20 9h2" }),
    tag("path", { d: "M9 2v2" }),
    tag("path", { d: "M9 20v2" }),
  ]),
  database: createLucideIcon([
    tag("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    tag("path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }),
    tag("path", { d: "M3 12A9 3 0 0 0 21 12" }),
  ]),
  download: createLucideIcon([
    tag("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    tag("polyline", { points: "7 10 12 15 17 10" }),
    tag("line", { x1: "12", x2: "12", y1: "15", y2: "3" }),
  ]),
  layers: createLucideIcon([
    tag("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
    tag("polyline", { points: "2 17 12 22 22 17" }),
    tag("polyline", { points: "2 12 12 17 22 12" }),
  ]),
  library: createLucideIcon([
    tag("path", { d: "m16 6 4 14" }),
    tag("path", { d: "M12 6v14" }),
    tag("path", { d: "M8 8v12" }),
    tag("path", { d: "M4 4v16" }),
  ]),
  "line-chart": createLucideIcon([
    tag("path", { d: "M3 3v18h18" }),
    tag("path", { d: "m19 9-5 5-4-4-3 3" }),
  ]),
  link: createLucideIcon([
    tag("path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    }),
    tag("path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    }),
  ]),
  moon: createLucideIcon([
    tag("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }),
  ]),
  "pie-chart": createLucideIcon([
    tag("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
    tag("path", { d: "M22 12A10 10 0 0 0 12 2v10z" }),
  ]),
  rocket: createLucideIcon([
    tag("path", {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    }),
    tag("path", {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    }),
    tag("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
    tag("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }),
  ]),
  scale: createLucideIcon([
    tag("path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
    tag("path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
    tag("path", { d: "M7 21h10" }),
    tag("path", { d: "M12 3v18" }),
    tag("path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }),
  ]),
  server: createLucideIcon([
    tag("rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }),
    tag("rect", {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
    }),
    tag("line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }),
    tag("line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }),
  ]),
  star: createLucideIcon([
    tag("polygon", {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    }),
  ]),
  sun: createLucideIcon([
    tag("circle", { cx: "12", cy: "12", r: "4" }),
    tag("path", { d: "M12 2v2" }),
    tag("path", { d: "M12 20v2" }),
    tag("path", { d: "m4.93 4.93 1.41 1.41" }),
    tag("path", { d: "m17.66 17.66 1.41 1.41" }),
    tag("path", { d: "M2 12h2" }),
    tag("path", { d: "M20 12h2" }),
    tag("path", { d: "m6.34 17.66-1.41 1.41" }),
    tag("path", { d: "m19.07 4.93-1.41 1.41" }),
  ]),
  upload: createLucideIcon([
    tag("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    tag("polyline", { points: "17 8 12 3 7 8" }),
    tag("line", { x1: "12", x2: "12", y1: "3", y2: "15" }),
  ]),
};

type LucideIcon = keyof typeof LucideIcons;

const LUCIDE_ICON = Object.keys(LucideIcons) as unknown as [
  `activity`,
  `bar-chart`,
  `code`,
  `coffee`,
  `command`,
  `compass`,
  `component`,
  `construction`,
  `copyright`,
  `cpu`,
  `database`,
  `download`,
  `layers`,
  `library`,
  `line-chart`,
  `link`,
  `moon`,
  `pie-chart`,
  `rocket`,
  `scale`,
  `server`,
  `star`,
  `sun`,
  `upload`,
];
const LUCIDE_ICON_DEFAULT = "code" satisfies LucideIcon;

const LucideIconSchema = z
  .enum(LUCIDE_ICON, {
    required_error: "Icon is required",
    invalid_type_error: "Invalid icon",
  })
  .default(LUCIDE_ICON_DEFAULT);

const isLucideIcon = (value?: unknown): value is LucideIcon =>
  LUCIDE_ICON.includes(String(value) as LucideIcon);

const createSimpleIcon = (
  d: string,
): Component<{
  s?: string | number;
  c?: string;
}> =>
({ s = 20, c = "currentColor" }) => {
  return tag("svg", {
    role: "img",
    viewBox: "0 0 24 24",
    width: s,
    height: s,
    fill: c,
    stroke: "none",
    children: tag("path", { d }),
  });
};

const SimpleIcons = {
  adonisjs: createSimpleIcon(si.siAdonisjs.path),
  algolia: createSimpleIcon(si.siAlgolia.path),
  "alpine.js": createSimpleIcon(si.siAlpinedotjs.path),
  appwrite: createSimpleIcon(si.siAppwrite.path),
  arduino: createSimpleIcon(si.siArduino.path),
  assemblyscript: createSimpleIcon(si.siAssemblyscript.path),
  astro: createSimpleIcon(si.siAstro.path),
  axios: createSimpleIcon(si.siAxios.path),
  behance: createSimpleIcon(si.siBehance.path),
  bitbucket: createSimpleIcon(si.siBitbucket.path),
  bun: createSimpleIcon(si.siBun.path),
  capacitor: createSimpleIcon(si.siCapacitor.path),
  cloudflare: createSimpleIcon(si.siCloudflare.path),
  cloudflarepages: createSimpleIcon(si.siCloudflarepages.path),
  codeberg: createSimpleIcon(si.siCodeberg.path),
  codecov: createSimpleIcon(si.siCodecov.path),
  codeigniter: createSimpleIcon(si.siCodeigniter.path),
  codemirror: createSimpleIcon(si.siCodemirror.path),
  codepen: createSimpleIcon(si.siCodepen.path),
  codesandbox: createSimpleIcon(si.siCodesandbox.path),
  commitlint: createSimpleIcon(si.siCommitlint.path),
  css3: createSimpleIcon(si.siCss3.path),
  deno: createSimpleIcon(si.siDeno.path),
  discord: createSimpleIcon(si.siDiscord.path),
  docker: createSimpleIcon(si.siDocker.path),
  dribbble: createSimpleIcon(si.siDribbble.path),
  elasticsearch: createSimpleIcon(si.siElasticsearch.path),
  electron: createSimpleIcon(si.siElectron.path),
  esbuild: createSimpleIcon(si.siEsbuild.path),
  eslint: createSimpleIcon(si.siEslint.path),
  express: createSimpleIcon(si.siExpress.path),
  fastify: createSimpleIcon(si.siFastify.path),
  figma: createSimpleIcon(si.siFigma.path),
  firebase: createSimpleIcon(si.siFirebase.path),
  flutter: createSimpleIcon(si.siFlutter.path),
  git: createSimpleIcon(si.siGit.path),
  github: createSimpleIcon(si.siGithub.path),
  githubactions: createSimpleIcon(si.siGithubactions.path),
  githubpages: createSimpleIcon(si.siGithubpages.path),
  gitlab: createSimpleIcon(si.siGitlab.path),
  googlechrome: createSimpleIcon(si.siGooglechrome.path),
  graphql: createSimpleIcon(si.siGraphql.path),
  html5: createSimpleIcon(si.siHtml5.path),
  instagram: createSimpleIcon(si.siInstagram.path),
  javascript: createSimpleIcon(si.siJavascript.path),
  json: createSimpleIcon(si.siJson.path),
  koyeb: createSimpleIcon(si.siKoyeb.path),
  laravel: createSimpleIcon(si.siLaravel.path),
  linkedin: createSimpleIcon(si.siLinkedin.path),
  mastodon: createSimpleIcon(si.siMastodon.path),
  microsoftedge: createSimpleIcon(si.siMicrosoftedge.path),
  mongodb: createSimpleIcon(si.siMongodb.path),
  mysql: createSimpleIcon(si.siMysql.path),
  nativescript: createSimpleIcon(si.siNativescript.path),
  nestjs: createSimpleIcon(si.siNestjs.path),
  netlify: createSimpleIcon(si.siNetlify.path),
  "next.js": createSimpleIcon(si.siNextdotjs.path),
  nginx: createSimpleIcon(si.siNginx.path),
  "node.js": createSimpleIcon(si.siNodedotjs.path),
  notion: createSimpleIcon(si.siNotion.path),
  npm: createSimpleIcon(si.siNpm.path),
  "nuxt.js": createSimpleIcon(si.siNuxtdotjs.path),
  openai: createSimpleIcon(si.siOpenai.path),
  penpot: createSimpleIcon(si.siPenpot.path),
  pexels: createSimpleIcon(si.siPexels.path),
  php: createSimpleIcon(si.siPhp.path),
  pinterest: createSimpleIcon(si.siPinterest.path),
  planetscale: createSimpleIcon(si.siPlanetscale.path),
  pnpm: createSimpleIcon(si.siPnpm.path),
  pocketbase: createSimpleIcon(si.siPocketbase.path),
  postgresql: createSimpleIcon(si.siPostgresql.path),
  preact: createSimpleIcon(si.siPreact.path),
  producthunt: createSimpleIcon(si.siProducthunt.path),
  pwa: createSimpleIcon(si.siPwa.path),
  python: createSimpleIcon(si.siPython.path),
  radixui: createSimpleIcon(si.siRadixui.path),
  react: createSimpleIcon(si.siReact.path),
  redux: createSimpleIcon(si.siRedux.path),
  remix: createSimpleIcon(si.siRemix.path),
  render: createSimpleIcon(si.siRender.path),
  rust: createSimpleIcon(si.siRust.path),
  sanity: createSimpleIcon(si.siSanity.path),
  signal: createSimpleIcon(si.siSignal.path),
  simpleicons: createSimpleIcon(si.siSimpleicons.path),
  slack: createSimpleIcon(si.siSlack.path),
  solid: createSimpleIcon(si.siSolid.path),
  stackblitz: createSimpleIcon(si.siStackblitz.path),
  supabase: createSimpleIcon(si.siSupabase.path),
  svelte: createSimpleIcon(si.siSvelte.path),
  tailwindcss: createSimpleIcon(si.siTailwindcss.path),
  tauri: createSimpleIcon(si.siTauri.path),
  telegram: createSimpleIcon(si.siTelegram.path),
  threads: createSimpleIcon(si.siThreads.path),
  "three.js": createSimpleIcon(si.siThreedotjs.path),
  tiktok: createSimpleIcon(si.siTiktok.path),
  turborepo: createSimpleIcon(si.siTurborepo.path),
  typescript: createSimpleIcon(si.siTypescript.path),
  unocss: createSimpleIcon(si.siUnocss.path),
  unsplash: createSimpleIcon(si.siUnsplash.path),
  vercel: createSimpleIcon(si.siVercel.path),
  visualstudiocode: createSimpleIcon(si.siVisualstudiocode.path),
  vite: createSimpleIcon(si.siVite.path),
  vitest: createSimpleIcon(si.siVitest.path),
  "vue.js": createSimpleIcon(si.siVuedotjs.path),
  webassembly: createSimpleIcon(si.siWebassembly.path),
  whatsapp: createSimpleIcon(si.siWhatsapp.path),
  windows: createSimpleIcon(si.siWindows.path),
  xampp: createSimpleIcon(si.siXampp.path),
  youtube: createSimpleIcon(si.siYoutube.path),
  zod: createSimpleIcon(si.siZod.path),
};

type SimpleIcon = keyof typeof SimpleIcons;

const SIMPLE_ICON = Object.keys(SimpleIcons) as unknown as [
  `adonisjs`,
  `algolia`,
  `alpine.js`,
  `appwrite`,
  `arduino`,
  `assemblyscript`,
  `astro`,
  `axios`,
  `behance`,
  `bitbucket`,
  `bun`,
  `capacitor`,
  `cloudflare`,
  `cloudflarepages`,
  `codeberg`,
  `codecov`,
  `codeigniter`,
  `codemirror`,
  `codepen`,
  `codesandbox`,
  `commitlint`,
  `css3`,
  `deno`,
  `discord`,
  `docker`,
  `dribbble`,
  `elasticsearch`,
  `electron`,
  `esbuild`,
  `eslint`,
  `express`,
  `fastify`,
  `figma`,
  `firebase`,
  `flutter`,
  `git`,
  `github`,
  `githubactions`,
  `githubpages`,
  `gitlab`,
  `googlechrome`,
  `graphql`,
  `html5`,
  `instagram`,
  `javascript`,
  `json`,
  `koyeb`,
  `laravel`,
  `linkedin`,
  `mastodon`,
  `microsoftedge`,
  `mongodb`,
  `mysql`,
  `nativescript`,
  `nestjs`,
  `netlify`,
  `next.js`,
  `nginx`,
  `node.js`,
  `notion`,
  `npm`,
  `nuxt.js`,
  `openai`,
  `penpot`,
  `pexels`,
  `php`,
  `pinterest`,
  `planetscale`,
  `pnpm`,
  `pocketbase`,
  `postgresql`,
  `preact`,
  `producthunt`,
  `pwa`,
  `python`,
  `radixui`,
  `react`,
  `redux`,
  `remix`,
  `render`,
  `rust`,
  `sanity`,
  `signal`,
  `simpleicons`,
  `slack`,
  `solid`,
  `stackblitz`,
  `supabase`,
  `svelte`,
  `tailwindcss`,
  `tauri`,
  `telegram`,
  `threads`,
  `three.js`,
  `tiktok`,
  `turborepo`,
  `typescript`,
  `unocss`,
  `unsplash`,
  `vercel`,
  `visualstudiocode`,
  `vite`,
  `vitest`,
  `vue.js`,
  `webassembly`,
  `whatsapp`,
  `windows`,
  `xampp`,
  `youtube`,
  `zod`,
];
const SIMPLE_ICON_DEFAULT = "github" satisfies SimpleIcon;

const SimpleIconSchema = z
  .enum(SIMPLE_ICON, {
    required_error: "Icon is required",
    invalid_type_error: "Invalid icon",
  })
  .default(SIMPLE_ICON_DEFAULT);

const isSimpleIcon = (value?: unknown): value is SimpleIcon =>
  SIMPLE_ICON.includes(String(value) as SimpleIcon);

export { LucideIconSchema, SimpleIconSchema };
export { Badge, Button, Icon, LucideIcons, SimpleIcons };
export { isLucideIcon, isSimpleIcon };
