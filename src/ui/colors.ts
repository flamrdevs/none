type Color =
  | "gray"
  | "mauve"
  | "slate"
  | "sage"
  | "olive"
  | "sand"
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "grass"
  | "orange"
  | "brown"
  | "sky"
  | "mint"
  | "lime"
  | "yellow"
  | "amber"
  | "bronze"
  | "gold";

type Theme = "dark" | "light";

type ColorObject = Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string>;

const COLORS = {
  gray: {
    light: { 1: "#fcfcfc", 2: "#f8f8f8", 3: "#f3f3f3", 4: "#ededed", 5: "#e8e8e8", 6: "#e2e2e2", 7: "#dbdbdb", 8: "#c7c7c7", 9: "#8f8f8f", 10: "#858585", 11: "#6f6f6f", 12: "#171717" },
    dark: { 1: "#161616", 2: "#1c1c1c", 3: "#232323", 4: "#282828", 5: "#2e2e2e", 6: "#343434", 7: "#3e3e3e", 8: "#505050", 9: "#707070", 10: "#7e7e7e", 11: "#a0a0a0", 12: "#ededed" },
  },
  mauve: {
    light: { 1: "#fdfcfd", 2: "#f9f8f9", 3: "#f4f2f4", 4: "#eeedef", 5: "#e9e8ea", 6: "#e4e2e4", 7: "#dcdbdd", 8: "#c8c7cb", 9: "#908e96", 10: "#86848d", 11: "#6f6e77", 12: "#1a1523" },
    dark: { 1: "#161618", 2: "#1c1c1f", 3: "#232326", 4: "#28282c", 5: "#2e2e32", 6: "#34343a", 7: "#3e3e44", 8: "#504f57", 9: "#706f78", 10: "#7e7d86", 11: "#a09fa6", 12: "#ededef" },
  },
  slate: {
    light: { 1: "#fbfcfd", 2: "#f8f9fa", 3: "#f1f3f5", 4: "#eceef0", 5: "#e6e8eb", 6: "#dfe3e6", 7: "#d7dbdf", 8: "#c1c8cd", 9: "#889096", 10: "#7e868c", 11: "#687076", 12: "#11181c" },
    dark: { 1: "#151718", 2: "#1a1d1e", 3: "#202425", 4: "#26292b", 5: "#2b2f31", 6: "#313538", 7: "#3a3f42", 8: "#4c5155", 9: "#697177", 10: "#787f85", 11: "#9ba1a6", 12: "#ecedee" },
  },
  sage: {
    light: { 1: "#fbfdfc", 2: "#f8faf9", 3: "#f1f4f3", 4: "#ecefed", 5: "#e6e9e8", 6: "#dfe4e2", 7: "#d7dcda", 8: "#c2c9c6", 9: "#8a918e", 10: "#808784", 11: "#6a716e", 12: "#111c18" },
    dark: { 1: "#141716", 2: "#191d1b", 3: "#1f2421", 4: "#252a27", 5: "#2a2f2c", 6: "#303633", 7: "#393f3c", 8: "#4a524e", 9: "#66736d", 10: "#75817b", 11: "#99a29e", 12: "#eceeed" },
  },
  olive: {
    light: { 1: "#fcfdfc", 2: "#f8faf8", 3: "#f2f4f2", 4: "#ecefec", 5: "#e6e9e6", 6: "#e0e4e0", 7: "#d8dcd8", 8: "#c3c8c2", 9: "#8b918a", 10: "#818780", 11: "#6b716a", 12: "#141e12" },
    dark: { 1: "#151715", 2: "#1a1d19", 3: "#20241f", 4: "#262925", 5: "#2b2f2a", 6: "#313530", 7: "#3b3f3a", 8: "#4c514b", 9: "#687366", 10: "#778175", 11: "#9aa299", 12: "#eceeec" },
  },
  sand: {
    light: { 1: "#fdfdfc", 2: "#f9f9f8", 3: "#f3f3f2", 4: "#eeeeec", 5: "#e9e9e6", 6: "#e3e3e0", 7: "#dbdbd7", 8: "#c8c7c1", 9: "#90908c", 10: "#868682", 11: "#706f6c", 12: "#1b1b18" },
    dark: { 1: "#161615", 2: "#1c1c1a", 3: "#232320", 4: "#282826", 5: "#2e2e2b", 6: "#353431", 7: "#3e3e3a", 8: "#51504b", 9: "#717069", 10: "#7f7e77", 11: "#a1a09a", 12: "#ededec" },
  },
  tomato: {
    light: { 1: "#fffcfc", 2: "#fff8f7", 3: "#fff0ee", 4: "#ffe6e2", 5: "#fdd8d3", 6: "#fac7be", 7: "#f3b0a2", 8: "#ea9280", 9: "#e54d2e", 10: "#db4324", 11: "#ca3214", 12: "#341711" },
    dark: { 1: "#1d1412", 2: "#2a1410", 3: "#3b1813", 4: "#481a14", 5: "#541c15", 6: "#652016", 7: "#7f2315", 8: "#a42a12", 9: "#e54d2e", 10: "#ec5e41", 11: "#f16a50", 12: "#feefec" },
  },
  red: {
    light: { 1: "#fffcfc", 2: "#fff8f8", 3: "#ffefef", 4: "#ffe5e5", 5: "#fdd8d8", 6: "#f9c6c6", 7: "#f3aeaf", 8: "#eb9091", 9: "#e5484d", 10: "#dc3d43", 11: "#cd2b31", 12: "#381316" },
    dark: { 1: "#1f1315", 2: "#291415", 3: "#3c181a", 4: "#481a1d", 5: "#541b1f", 6: "#671e22", 7: "#822025", 8: "#aa2429", 9: "#e5484d", 10: "#f2555a", 11: "#ff6369", 12: "#feecee" },
  },
  crimson: {
    light: { 1: "#fffcfd", 2: "#fff7fb", 3: "#feeff6", 4: "#fce5f0", 5: "#f9d8e7", 6: "#f4c6db", 7: "#edadc8", 8: "#e58fb1", 9: "#e93d82", 10: "#e03177", 11: "#d31e66", 12: "#3d0d1d" },
    dark: { 1: "#1d1418", 2: "#27141c", 3: "#3c1827", 4: "#481a2d", 5: "#541b33", 6: "#641d3b", 7: "#801d45", 8: "#ae1955", 9: "#e93d82", 10: "#f04f88", 11: "#f76190", 12: "#feecf4" },
  },
  pink: {
    light: { 1: "#fffcfe", 2: "#fff7fc", 3: "#feeef8", 4: "#fce5f3", 5: "#f9d8ec", 6: "#f3c6e2", 7: "#ecadd4", 8: "#e38ec3", 9: "#d6409f", 10: "#d23197", 11: "#cd1d8d", 12: "#3b0a2a" },
    dark: { 1: "#1f121b", 2: "#271421", 3: "#3a182f", 4: "#451a37", 5: "#501b3f", 6: "#601d48", 7: "#7a1d5a", 8: "#a71873", 9: "#d6409f", 10: "#e34ba9", 11: "#f65cb6", 12: "#feebf7" },
  },
  plum: {
    light: { 1: "#fefcff", 2: "#fff8ff", 3: "#fceffc", 4: "#f9e5f9", 5: "#f3d9f4", 6: "#ebc8ed", 7: "#dfafe3", 8: "#cf91d8", 9: "#ab4aba", 10: "#a43cb4", 11: "#9c2bad", 12: "#340c3b" },
    dark: { 1: "#1d131d", 2: "#251425", 3: "#341a34", 4: "#3e1d40", 5: "#48214b", 6: "#542658", 7: "#692d6f", 8: "#883894", 9: "#ab4aba", 10: "#bd54c6", 11: "#d864d8", 12: "#fbecfc" },
  },
  purple: {
    light: { 1: "#fefcfe", 2: "#fdfaff", 3: "#f9f1fe", 4: "#f3e7fc", 5: "#eddbf9", 6: "#e3ccf4", 7: "#d3b4ed", 8: "#be93e4", 9: "#8e4ec6", 10: "#8445bc", 11: "#793aaf", 12: "#2b0e44" },
    dark: { 1: "#1b141d", 2: "#221527", 3: "#301a3a", 4: "#3a1e48", 5: "#432155", 6: "#4e2667", 7: "#5f2d84", 8: "#7938b2", 9: "#8e4ec6", 10: "#9d5bd2", 11: "#bf7af0", 12: "#f7ecfc" },
  },
  violet: {
    light: { 1: "#fdfcfe", 2: "#fbfaff", 3: "#f5f2ff", 4: "#ede9fe", 5: "#e4defc", 6: "#d7cff9", 7: "#c4b8f3", 8: "#aa99ec", 9: "#6e56cf", 10: "#644fc1", 11: "#5746af", 12: "#20134b" },
    dark: { 1: "#17151f", 2: "#1c172b", 3: "#251e40", 4: "#2c2250", 5: "#32275f", 6: "#392c72", 7: "#443592", 8: "#5842c3", 9: "#6e56cf", 10: "#7c66dc", 11: "#9e8cfc", 12: "#f1eefe" },
  },
  indigo: {
    light: { 1: "#fdfdfe", 2: "#f8faff", 3: "#f0f4ff", 4: "#e6edfe", 5: "#d9e2fc", 6: "#c6d4f9", 7: "#aec0f5", 8: "#8da4ef", 9: "#3e63dd", 10: "#3a5ccc", 11: "#3451b2", 12: "#101d46" },
    dark: { 1: "#131620", 2: "#15192d", 3: "#192140", 4: "#1c274f", 5: "#1f2c5c", 6: "#22346e", 7: "#273e89", 8: "#2f4eb2", 9: "#3e63dd", 10: "#5373e7", 11: "#849dff", 12: "#eef1fd" },
  },
  blue: {
    light: { 1: "#fbfdff", 2: "#f5faff", 3: "#edf6ff", 4: "#e1f0ff", 5: "#cee7fe", 6: "#b7d9f8", 7: "#96c7f2", 8: "#5eb0ef", 9: "#0091ff", 10: "#0081f1", 11: "#006adc", 12: "#00254d" },
    dark: { 1: "#0f1720", 2: "#0f1b2d", 3: "#10243e", 4: "#102a4c", 5: "#0f3058", 6: "#0d3868", 7: "#0a4481", 8: "#0954a5", 9: "#0091ff", 10: "#369eff", 11: "#52a9ff", 12: "#eaf6ff" },
  },
  cyan: {
    light: { 1: "#fafdfe", 2: "#f2fcfd", 3: "#e7f9fb", 4: "#d8f3f6", 5: "#c4eaef", 6: "#aadee6", 7: "#84cdda", 8: "#3db9cf", 9: "#05a2c2", 10: "#0894b3", 11: "#0c7792", 12: "#04313c" },
    dark: { 1: "#07191d", 2: "#061e24", 3: "#072830", 4: "#07303b", 5: "#073844", 6: "#064150", 7: "#045063", 8: "#00647d", 9: "#05a2c2", 10: "#00b1cc", 11: "#00c2d7", 12: "#e1f8fa" },
  },
  teal: {
    light: { 1: "#fafefd", 2: "#f1fcfa", 3: "#e7f9f5", 4: "#d9f3ee", 5: "#c7ebe5", 6: "#afdfd7", 7: "#8dcec3", 8: "#53b9ab", 9: "#12a594", 10: "#0e9888", 11: "#067a6f", 12: "#10302b" },
    dark: { 1: "#091915", 2: "#04201b", 3: "#062923", 4: "#07312b", 5: "#083932", 6: "#09443c", 7: "#0b544a", 8: "#0c6d62", 9: "#12a594", 10: "#10b3a3", 11: "#0ac5b3", 12: "#e1faf4" },
  },
  green: {
    light: { 1: "#fbfefc", 2: "#f2fcf5", 3: "#e9f9ee", 4: "#ddf3e4", 5: "#ccebd7", 6: "#b4dfc4", 7: "#92ceac", 8: "#5bb98c", 9: "#30a46c", 10: "#299764", 11: "#18794e", 12: "#153226" },
    dark: { 1: "#0d1912", 2: "#0c1f17", 3: "#0f291e", 4: "#113123", 5: "#133929", 6: "#164430", 7: "#1b543a", 8: "#236e4a", 9: "#30a46c", 10: "#3cb179", 11: "#4cc38a", 12: "#e5fbeb" },
  },
  grass: {
    light: { 1: "#fbfefb", 2: "#f3fcf3", 3: "#ebf9eb", 4: "#dff3df", 5: "#ceebcf", 6: "#b7dfba", 7: "#97cf9c", 8: "#65ba75", 9: "#46a758", 10: "#3d9a50", 11: "#297c3b", 12: "#1b311e" },
    dark: { 1: "#0d1912", 2: "#0f1e13", 3: "#132819", 4: "#16301d", 5: "#193921", 6: "#1d4427", 7: "#245530", 8: "#2f6e3b", 9: "#46a758", 10: "#55b467", 11: "#63c174", 12: "#e5fbeb" },
  },
  orange: {
    light: { 1: "#fefcfb", 2: "#fef8f4", 3: "#fff1e7", 4: "#ffe8d7", 5: "#ffdcc3", 6: "#ffcca7", 7: "#ffb381", 8: "#fa934e", 9: "#f76808", 10: "#ed5f00", 11: "#bd4b00", 12: "#451e11" },
    dark: { 1: "#1f1206", 2: "#2b1400", 3: "#391a03", 4: "#441f04", 5: "#4f2305", 6: "#5f2a06", 7: "#763205", 8: "#943e00", 9: "#f76808", 10: "#ff802b", 11: "#ff8b3e", 12: "#feeadd" },
  },
  brown: {
    light: { 1: "#fefdfc", 2: "#fcf9f6", 3: "#f8f1ea", 4: "#f4e9dd", 5: "#efddcc", 6: "#e8cdb5", 7: "#ddb896", 8: "#d09e72", 9: "#ad7f58", 10: "#a07653", 11: "#886349", 12: "#3f2c22" },
    dark: { 1: "#191513", 2: "#221813", 3: "#2e201a", 4: "#36261e", 5: "#3e2c22", 6: "#493528", 7: "#5c4332", 8: "#775940", 9: "#ad7f58", 10: "#bd8b60", 11: "#dba16e", 12: "#faf0e5" },
  },
  sky: {
    light: { 1: "#f9feff", 2: "#f1fcff", 3: "#e4f9ff", 4: "#d5f4fd", 5: "#c1ecf9", 6: "#a4dff1", 7: "#79cfea", 8: "#2ebde5", 9: "#68ddfd", 10: "#5fd4f4", 11: "#0078a1", 12: "#003242" },
    dark: { 1: "#0c1820", 2: "#071d2a", 3: "#082636", 4: "#082d41", 5: "#08354c", 6: "#083e59", 7: "#064b6b", 8: "#005d85", 9: "#68ddfd", 10: "#8ae8ff", 11: "#2ec8ee", 12: "#eaf8ff" },
  },
  mint: {
    light: { 1: "#f9fefd", 2: "#effefa", 3: "#e1fbf4", 4: "#d2f7ed", 5: "#c0efe3", 6: "#a5e4d4", 7: "#7dd4c0", 8: "#40c4aa", 9: "#70e1c8", 10: "#69d9c1", 11: "#147d6f", 12: "#09342e" },
    dark: { 1: "#081917", 2: "#05201e", 3: "#052926", 4: "#04312c", 5: "#033a34", 6: "#01453d", 7: "#00564a", 8: "#006d5b", 9: "#70e1c8", 10: "#95f3d9", 11: "#25d0ab", 12: "#e7fcf7" },
  },
  lime: {
    light: { 1: "#fcfdfa", 2: "#f7fcf0", 3: "#eefadc", 4: "#e4f7c7", 5: "#d7f2b0", 6: "#c9e894", 7: "#b1d16a", 8: "#94ba2c", 9: "#99d52a", 10: "#93c926", 11: "#5d770d", 12: "#263209" },
    dark: { 1: "#141807", 2: "#181d08", 3: "#1e260d", 4: "#252e0f", 5: "#2b3711", 6: "#344213", 7: "#415215", 8: "#536716", 9: "#99d52a", 10: "#c4f042", 11: "#87be22", 12: "#effbdd" },
  },
  yellow: {
    light: { 1: "#fdfdf9", 2: "#fffce8", 3: "#fffbd1", 4: "#fff8bb", 5: "#fef2a4", 6: "#f9e68c", 7: "#efd36c", 8: "#ebbc00", 9: "#f5d90a", 10: "#f7ce00", 11: "#946800", 12: "#35290f" },
    dark: { 1: "#1c1500", 2: "#221a00", 3: "#2c2100", 4: "#352800", 5: "#3e3000", 6: "#493c00", 7: "#594a05", 8: "#705e00", 9: "#f5d90a", 10: "#ffef5c", 11: "#f0c000", 12: "#fffad1" },
  },
  amber: {
    light: { 1: "#fefdfb", 2: "#fff9ed", 3: "#fff4d5", 4: "#ffecbc", 5: "#ffe3a2", 6: "#ffd386", 7: "#f3ba63", 8: "#ee9d2b", 9: "#ffb224", 10: "#ffa01c", 11: "#ad5700", 12: "#4e2009" },
    dark: { 1: "#1f1300", 2: "#271700", 3: "#341c00", 4: "#3f2200", 5: "#4a2900", 6: "#573300", 7: "#693f05", 8: "#824e00", 9: "#ffb224", 10: "#ffcb47", 11: "#f1a10d", 12: "#fef3dd" },
  },
  bronze: {
    light: { 1: "#fdfcfc", 2: "#fdf8f6", 3: "#f8f1ee", 4: "#f2e8e4", 5: "#eaddd7", 6: "#e0cec7", 7: "#d1b9b0", 8: "#bfa094", 9: "#a18072", 10: "#977669", 11: "#846358", 12: "#43302b" },
    dark: { 1: "#191514", 2: "#1f1917", 3: "#2a211f", 4: "#332824", 5: "#3b2e29", 6: "#453530", 7: "#57433c", 8: "#74594e", 9: "#a18072", 10: "#b08c7d", 11: "#cba393", 12: "#f9ede7" },
  },
  gold: {
    light: { 1: "#fdfdfc", 2: "#fbf9f2", 3: "#f5f2e9", 4: "#eeeadd", 5: "#e5dfd0", 6: "#dad1bd", 7: "#cbbda4", 8: "#b8a383", 9: "#978365", 10: "#8c795d", 11: "#776750", 12: "#3b352b" },
    dark: { 1: "#171613", 2: "#1c1a15", 3: "#26231c", 4: "#2e2a21", 5: "#353026", 6: "#3e382c", 7: "#504737", 8: "#6b5d48", 9: "#978365", 10: "#a59071", 11: "#bfa888", 12: "#f7f4e7" },
  },
} satisfies Record<Color, Record<Theme, ColorObject>>;

export type { Color, ColorObject, Theme };
export default COLORS;
