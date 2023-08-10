import * as si from 'simple-icons';
import * as li from 'lucide';
import { z } from 'zod';

import { tag } from '~/libs/svg';
import type { Children, Component, PropsWithChildren, RootComponent } from '~/libs/svg';

import type { Color, Theme } from './colors';
import { select } from './utils';

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

const calcBadgeWidth = (str: string) => str.length * 9 + 11;
const calcBadgeIconWidth = (str: string) => str.length * 9 + 24;

const Badge: RootComponent<PropsWithChildren<BaseProps & SizeProps>> = ({ c, t, w, h, children }) => {
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

const Button: RootComponent<PropsWithChildren<BaseProps & SizeProps>> = ({ c, t, w, h, children }) => {
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

const Icon: RootComponent<PropsWithChildren<BaseProps & SizeProps>> = ({ c, t, w, h, children }) => {
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

type IconNodeChild = readonly [tag: string, attrs: Record<string, string | number>];
type IconNode = readonly [tag: string, attrs: Record<string, string | number>, children?: IconNodeChild[]];

const createLucideIcon =
  (
    node: IconNode
  ): Component<{
    s?: string | number;
    c?: string;
  }> =>
  ({ s = 20, c = 'currentColor' }) => {
    const children = node[2];
    return tag('svg', {
      role: 'img',
      viewBox: '0 0 24 24',
      width: s,
      height: s,
      fill: 'none',
      stroke: c,
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: Array.isArray(children) ? children.map((child) => tag(child[0], child[1])) : [],
    });
  };

const LucideIcons = {
  activity: createLucideIcon(li.Activity),
  'alert-circle': createLucideIcon(li.AlertCircle),
  'alert-octagon': createLucideIcon(li.AlertOctagon),
  'alert-triangle': createLucideIcon(li.AlertTriangle),
  'arrow-down': createLucideIcon(li.ArrowDown),
  'arrow-left': createLucideIcon(li.ArrowLeft),
  'arrow-right': createLucideIcon(li.ArrowRight),
  'arrow-up': createLucideIcon(li.ArrowUp),
  award: createLucideIcon(li.Award),
  'bar-chart': createLucideIcon(li.BarChart),
  bell: createLucideIcon(li.Bell),
  blocks: createLucideIcon(li.Blocks),
  bot: createLucideIcon(li.Bot),
  box: createLucideIcon(li.Box),
  braces: createLucideIcon(li.Braces),
  brackets: createLucideIcon(li.Brackets),
  calendar: createLucideIcon(li.Calendar),
  clock: createLucideIcon(li.Clock),
  code: createLucideIcon(li.Code),
  coffee: createLucideIcon(li.Coffee),
  command: createLucideIcon(li.Command),
  compass: createLucideIcon(li.Compass),
  component: createLucideIcon(li.Component),
  construction: createLucideIcon(li.Construction),
  copyright: createLucideIcon(li.Copyright),
  cpu: createLucideIcon(li.Cpu),
  database: createLucideIcon(li.Database),
  download: createLucideIcon(li.Download),
  'external-link': createLucideIcon(li.ExternalLink),
  folder: createLucideIcon(li.Folder),
  gift: createLucideIcon(li.Gift),
  goal: createLucideIcon(li.Goal),
  history: createLucideIcon(li.History),
  home: createLucideIcon(li.Home),
  image: createLucideIcon(li.Image),
  info: createLucideIcon(li.Info),
  joystick: createLucideIcon(li.Joystick),
  layers: createLucideIcon(li.Layers),
  layout: createLucideIcon(li.Layout),
  library: createLucideIcon(li.Library),
  'line-chart': createLucideIcon(li.LineChart),
  link: createLucideIcon(li.Link),
  lock: createLucideIcon(li.Lock),
  map: createLucideIcon(li.Map),
  moon: createLucideIcon(li.Moon),
  network: createLucideIcon(li.Network),
  package: createLucideIcon(li.Package),
  palette: createLucideIcon(li.Palette),
  'pie-chart': createLucideIcon(li.PieChart),
  'qr-code': createLucideIcon(li.QrCode),
  radiation: createLucideIcon(li.Radiation),
  reply: createLucideIcon(li.Reply),
  rocket: createLucideIcon(li.Rocket),
  rss: createLucideIcon(li.Rss),
  scale: createLucideIcon(li.Scale),
  server: createLucideIcon(li.Server),
  shapes: createLucideIcon(li.Shapes),
  share: createLucideIcon(li.Share),
  star: createLucideIcon(li.Star),
  sun: createLucideIcon(li.Sun),
  tag: createLucideIcon(li.Tag),
  terminal: createLucideIcon(li.Terminal),
  ticket: createLucideIcon(li.Ticket),
  timer: createLucideIcon(li.Timer),
  unlink: createLucideIcon(li.Unlink),
  unlock: createLucideIcon(li.Unlock),
  upload: createLucideIcon(li.Upload),
  user: createLucideIcon(li.User),
  users: createLucideIcon(li.Users),
  video: createLucideIcon(li.Video),
  wifi: createLucideIcon(li.Wifi),
  x: createLucideIcon(li.X),
  zap: createLucideIcon(li.Zap),
};

type LucideIcon = keyof typeof LucideIcons;

const LUCIDE_ICON = Object.keys(LucideIcons) as unknown as [
  `activity`,
  `alert-circle`,
  `alert-octagon`,
  `alert-triangle`,
  `arrow-down`,
  `arrow-left`,
  `arrow-right`,
  `arrow-up`,
  `award`,
  `bar-chart`,
  `bell`,
  `blocks`,
  `bot`,
  `box`,
  `braces`,
  `brackets`,
  `calendar`,
  `clock`,
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
  `external-link`,
  `folder`,
  `gift`,
  `goal`,
  `history`,
  `home`,
  `image`,
  `info`,
  `joystick`,
  `layers`,
  `layout`,
  `library`,
  `line-chart`,
  `link`,
  `lock`,
  `map`,
  `moon`,
  `network`,
  `package`,
  `palette`,
  `pie-chart`,
  `qr-code`,
  `radiation`,
  `reply`,
  `rocket`,
  `rss`,
  `scale`,
  `server`,
  `shapes`,
  `share`,
  `star`,
  `sun`,
  `tag`,
  `terminal`,
  `ticket`,
  `timer`,
  `unlink`,
  `unlock`,
  `upload`,
  `user`,
  `users`,
  `video`,
  `wifi`,
  `x`,
  `zap`
];
const LUCIDE_ICON_DEFAULT = 'code' satisfies LucideIcon;

const LucideIconSchema = z.enum(LUCIDE_ICON, { required_error: 'Icon is required', invalid_type_error: 'Invalid icon' }).default(LUCIDE_ICON_DEFAULT);

const isLucideIcon = (value?: unknown): value is LucideIcon => LUCIDE_ICON.includes(String(value) as LucideIcon);

const createSimpleIcon =
  (
    d: string
  ): Component<{
    s?: string | number;
    c?: string;
  }> =>
  ({ s = 20, c = 'currentColor' }) => {
    return tag('svg', {
      role: 'img',
      viewBox: '0 0 24 24',
      width: s,
      height: s,
      fill: c,
      stroke: 'none',
      children: tag('path', { d }),
    });
  };

const SimpleIcons = {
  adonisjs: createSimpleIcon(si.siAdonisjs.path),
  algolia: createSimpleIcon(si.siAlgolia.path),
  'alpine.js': createSimpleIcon(si.siAlpinedotjs.path),
  angular: createSimpleIcon(si.siAngular.path),
  appwrite: createSimpleIcon(si.siAppwrite.path),
  arduino: createSimpleIcon(si.siArduino.path),
  assemblyscript: createSimpleIcon(si.siAssemblyscript.path),
  astro: createSimpleIcon(si.siAstro.path),
  axios: createSimpleIcon(si.siAxios.path),
  behance: createSimpleIcon(si.siBehance.path),
  bento: createSimpleIcon(si.siBento.path),
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
  'dev.to': createSimpleIcon(si.siDevdotto.path),
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
  medium: createSimpleIcon(si.siMedium.path),
  microsoftedge: createSimpleIcon(si.siMicrosoftedge.path),
  mongodb: createSimpleIcon(si.siMongodb.path),
  mysql: createSimpleIcon(si.siMysql.path),
  nativescript: createSimpleIcon(si.siNativescript.path),
  nestjs: createSimpleIcon(si.siNestjs.path),
  netlify: createSimpleIcon(si.siNetlify.path),
  'next.js': createSimpleIcon(si.siNextdotjs.path),
  nginx: createSimpleIcon(si.siNginx.path),
  'node.js': createSimpleIcon(si.siNodedotjs.path),
  notion: createSimpleIcon(si.siNotion.path),
  npm: createSimpleIcon(si.siNpm.path),
  'nuxt.js': createSimpleIcon(si.siNuxtdotjs.path),
  nx: createSimpleIcon(si.siNx.path),
  openai: createSimpleIcon(si.siOpenai.path),
  opencollective: createSimpleIcon(si.siOpencollective.path),
  payloadcms: createSimpleIcon(si.siPayloadcms.path),
  paypal: createSimpleIcon(si.siPaypal.path),
  penpot: createSimpleIcon(si.siPenpot.path),
  pexels: createSimpleIcon(si.siPexels.path),
  php: createSimpleIcon(si.siPhp.path),
  pinterest: createSimpleIcon(si.siPinterest.path),
  planetscale: createSimpleIcon(si.siPlanetscale.path),
  pnpm: createSimpleIcon(si.siPnpm.path),
  pocketbase: createSimpleIcon(si.siPocketbase.path),
  postgresql: createSimpleIcon(si.siPostgresql.path),
  preact: createSimpleIcon(si.siPreact.path),
  prettier: createSimpleIcon(si.siPrettier.path),
  prisma: createSimpleIcon(si.siPrisma.path),
  producthunt: createSimpleIcon(si.siProducthunt.path),
  pwa: createSimpleIcon(si.siPwa.path),
  python: createSimpleIcon(si.siPython.path),
  radixui: createSimpleIcon(si.siRadixui.path),
  react: createSimpleIcon(si.siReact.path),
  redis: createSimpleIcon(si.siRedis.path),
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
  'three.js': createSimpleIcon(si.siThreedotjs.path),
  tiktok: createSimpleIcon(si.siTiktok.path),
  turborepo: createSimpleIcon(si.siTurborepo.path),
  typescript: createSimpleIcon(si.siTypescript.path),
  unocss: createSimpleIcon(si.siUnocss.path),
  unsplash: createSimpleIcon(si.siUnsplash.path),
  upstash: createSimpleIcon(si.siUpstash.path),
  vercel: createSimpleIcon(si.siVercel.path),
  visualstudiocode: createSimpleIcon(si.siVisualstudiocode.path),
  vite: createSimpleIcon(si.siVite.path),
  vitest: createSimpleIcon(si.siVitest.path),
  'vue.js': createSimpleIcon(si.siVuedotjs.path),
  webassembly: createSimpleIcon(si.siWebassembly.path),
  whatsapp: createSimpleIcon(si.siWhatsapp.path),
  windows: createSimpleIcon(si.siWindows.path),
  x: createSimpleIcon(si.siX.path),
  xampp: createSimpleIcon(si.siXampp.path),
  youtube: createSimpleIcon(si.siYoutube.path),
  zod: createSimpleIcon(si.siZod.path),
};

type SimpleIcon = keyof typeof SimpleIcons;

const SIMPLE_ICON = Object.keys(SimpleIcons) as unknown as [
  `adonisjs`,
  `algolia`,
  `alpine.js`,
  `angular`,
  `appwrite`,
  `arduino`,
  `assemblyscript`,
  `astro`,
  `axios`,
  `behance`,
  `bento`,
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
  `dev.to`,
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
  `medium`,
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
  `nx`,
  `openai`,
  `opencollective`,
  `payloadcms`,
  `paypal`,
  `penpot`,
  `pexels`,
  `php`,
  `pinterest`,
  `planetscale`,
  `pnpm`,
  `pocketbase`,
  `postgresql`,
  `preact`,
  `prettier`,
  `prisma`,
  `producthunt`,
  `pwa`,
  `python`,
  `radixui`,
  `react`,
  `redis`,
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
  `upstash`,
  `vercel`,
  `visualstudiocode`,
  `vite`,
  `vitest`,
  `vue.js`,
  `webassembly`,
  `whatsapp`,
  `windows`,
  `x`,
  `xampp`,
  `youtube`,
  `zod`
];
const SIMPLE_ICON_DEFAULT = 'github' satisfies SimpleIcon;

const SimpleIconSchema = z.enum(SIMPLE_ICON, { required_error: 'Icon is required', invalid_type_error: 'Invalid icon' }).default(SIMPLE_ICON_DEFAULT);

const isSimpleIcon = (value?: unknown): value is SimpleIcon => SIMPLE_ICON.includes(String(value) as SimpleIcon);

export { LucideIconSchema, SimpleIconSchema };
export { Badge, BadgeChildIcon, Button, ButtonChildIcon, Icon, LucideIcons, SimpleIcons };
export { calcBadgeWidth, calcBadgeIconWidth, calcButtonIconWidth, calcButtonWidth, isLucideIcon, isSimpleIcon };
