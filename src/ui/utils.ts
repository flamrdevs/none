import { z } from "zod";

import COLORS from "./colors";
import type { Color, ColorObject, Theme } from "./colors";

const COLOR = Object.keys(COLORS) as unknown as [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
  "tomato",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "grass",
  "orange",
  "brown",
  "sky",
  "mint",
  "lime",
  "yellow",
  "amber",
  "bronze",
  "gold",
];
const COLOR_DEFAULT = "gray" satisfies Color;

const THEME = ["dark", "light"] as const satisfies readonly Theme[];
const THEME_DEFAULT = "dark" satisfies Theme;

const select = (
  color: Color = COLOR_DEFAULT,
  theme: Theme = THEME_DEFAULT,
): ColorObject => COLORS[color][theme];

const ColorSchema = z.enum(COLOR, {
  invalid_type_error: "Invalid color",
  required_error: "Required color",
}).default(COLOR_DEFAULT);
const ThemeSchema = z.enum(THEME, {
  invalid_type_error: "Invalid theme",
  required_error: "Required theme",
}).default(THEME_DEFAULT);

export { ColorSchema, ThemeSchema };
export { select };
