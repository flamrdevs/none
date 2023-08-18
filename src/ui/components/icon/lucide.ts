import type { Context } from 'hono';
import * as li from 'lucide';
import { z } from 'zod';

import type { Component } from '~/libs/svg';

import { tag } from '../utils';

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
  locate: createLucideIcon(li.Locate),
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
  `locate`,
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

const getValidLucideIconQuery = async (context: Context, key: string = 'i') => await LucideIconSchema.parseAsync(context.req.query(key));

export type { LucideIcon };
export { LucideIconSchema };
export { LucideIcons };
export { getValidLucideIconQuery };