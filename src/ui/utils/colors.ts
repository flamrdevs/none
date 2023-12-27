type Color =
  | 'gray'
  | 'mauve'
  | 'slate'
  | 'sage'
  | 'olive'
  | 'sand'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'orange'
  | 'brown'
  | 'sky'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'bronze'
  | 'gold';

type Theme = 'dark' | 'light';

type ColorObject = Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string>;

const COLORS = {
  gray: {
    light: { 1: '#fcfcfc', 2: '#f9f9f9', 3: '#f0f0f0', 4: '#e8e8e8', 5: '#e0e0e0', 6: '#d9d9d9', 7: '#cecece', 8: '#bbbbbb', 9: '#8d8d8d', 10: '#838383', 11: '#646464', 12: '#202020' },
    dark: { 1: '#111111', 2: '#191919', 3: '#222222', 4: '#2a2a2a', 5: '#313131', 6: '#3a3a3a', 7: '#484848', 8: '#606060', 9: '#6e6e6e', 10: '#7b7b7b', 11: '#b4b4b4', 12: '#eeeeee' },
  },
  mauve: {
    light: { 1: '#fdfcfd', 2: '#faf9fb', 3: '#f2eff3', 4: '#eae7ec', 5: '#e3dfe6', 6: '#dbd8e0', 7: '#d0cdd7', 8: '#bcbac7', 9: '#8e8c99', 10: '#84828e', 11: '#65636d', 12: '#211f26' },
    dark: { 1: '#121113', 2: '#1a191b', 3: '#232225', 4: '#2b292d', 5: '#323035', 6: '#3c393f', 7: '#49474e', 8: '#625f69', 9: '#6f6d78', 10: '#7c7a85', 11: '#b5b2bc', 12: '#eeeef0' },
  },
  slate: {
    light: { 1: '#fcfcfd', 2: '#f9f9fb', 3: '#f0f0f3', 4: '#e8e8ec', 5: '#e0e1e6', 6: '#d9d9e0', 7: '#cdced6', 8: '#b9bbc6', 9: '#8b8d98', 10: '#80838d', 11: '#60646c', 12: '#1c2024' },
    dark: { 1: '#111113', 2: '#18191b', 3: '#212225', 4: '#272a2d', 5: '#2e3135', 6: '#363a3f', 7: '#43484e', 8: '#5a6169', 9: '#696e77', 10: '#777b84', 11: '#b0b4ba', 12: '#edeef0' },
  },
  sage: {
    light: { 1: '#fbfdfc', 2: '#f7f9f8', 3: '#eef1f0', 4: '#e6e9e8', 5: '#dfe2e0', 6: '#d7dad9', 7: '#cbcfcd', 8: '#b8bcba', 9: '#868e8b', 10: '#7c8481', 11: '#5f6563', 12: '#1a211e' },
    dark: { 1: '#101211', 2: '#171918', 3: '#202221', 4: '#272a29', 5: '#2e3130', 6: '#373b39', 7: '#444947', 8: '#5b625f', 9: '#63706b', 10: '#717d79', 11: '#adb5b2', 12: '#eceeed' },
  },
  olive: {
    light: { 1: '#fcfdfc', 2: '#f8faf8', 3: '#eff1ef', 4: '#e7e9e7', 5: '#dfe2df', 6: '#d7dad7', 7: '#cccfcc', 8: '#b9bcb8', 9: '#898e87', 10: '#7f847d', 11: '#60655f', 12: '#1d211c' },
    dark: { 1: '#111210', 2: '#181917', 3: '#212220', 4: '#282a27', 5: '#2f312e', 6: '#383a36', 7: '#454843', 8: '#5c625b', 9: '#687066', 10: '#767d74', 11: '#afb5ad', 12: '#eceeec' },
  },
  sand: {
    light: { 1: '#fdfdfc', 2: '#f9f9f8', 3: '#f1f0ef', 4: '#e9e8e6', 5: '#e2e1de', 6: '#dad9d6', 7: '#cfceca', 8: '#bcbbb5', 9: '#8d8d86', 10: '#82827c', 11: '#63635e', 12: '#21201c' },
    dark: { 1: '#111110', 2: '#191918', 3: '#222221', 4: '#2a2a28', 5: '#31312e', 6: '#3b3a37', 7: '#494844', 8: '#62605b', 9: '#6f6d66', 10: '#7c7b74', 11: '#b5b3ad', 12: '#eeeeec' },
  },
  tomato: {
    light: { 1: '#fffcfc', 2: '#fff8f7', 3: '#feebe7', 4: '#ffdcd3', 5: '#ffcdc2', 6: '#fdbdaf', 7: '#f5a898', 8: '#ec8e7b', 9: '#e54d2e', 10: '#dd4425', 11: '#d13415', 12: '#5c271f' },
    dark: { 1: '#181111', 2: '#1f1513', 3: '#391714', 4: '#4e1511', 5: '#5e1c16', 6: '#6e2920', 7: '#853a2d', 8: '#ac4d39', 9: '#e54d2e', 10: '#ec6142', 11: '#ff977d', 12: '#fbd3cb' },
  },
  red: {
    light: { 1: '#fffcfc', 2: '#fff7f7', 3: '#feebec', 4: '#ffdbdc', 5: '#ffcdce', 6: '#fdbdbe', 7: '#f4a9aa', 8: '#eb8e90', 9: '#e5484d', 10: '#dc3e42', 11: '#ce2c31', 12: '#641723' },
    dark: { 1: '#191111', 2: '#201314', 3: '#3b1219', 4: '#500f1c', 5: '#611623', 6: '#72232d', 7: '#8c333a', 8: '#b54548', 9: '#e5484d', 10: '#ec5d5e', 11: '#ff9592', 12: '#ffd1d9' },
  },
  ruby: {
    light: { 1: '#fffcfd', 2: '#fff7f8', 3: '#feeaed', 4: '#ffdce1', 5: '#ffced6', 6: '#f8bfc8', 7: '#efacb8', 8: '#e592a3', 9: '#e54666', 10: '#dc3b5d', 11: '#ca244d', 12: '#64172b' },
    dark: { 1: '#191113', 2: '#1e1517', 3: '#3a141e', 4: '#4e1325', 5: '#5e1a2e', 6: '#6f2539', 7: '#883447', 8: '#b3445a', 9: '#e54666', 10: '#ec5a72', 11: '#ff949d', 12: '#fed2e1' },
  },
  crimson: {
    light: { 1: '#fffcfd', 2: '#fef7f9', 3: '#ffe9f0', 4: '#fedce7', 5: '#facedd', 6: '#f3bed1', 7: '#eaacc3', 8: '#e093b2', 9: '#e93d82', 10: '#df3478', 11: '#cb1d63', 12: '#621639' },
    dark: { 1: '#191114', 2: '#201318', 3: '#381525', 4: '#4d122f', 5: '#5c1839', 6: '#6d2545', 7: '#873356', 8: '#b0436e', 9: '#e93d82', 10: '#ee518a', 11: '#ff92ad', 12: '#fdd3e8' },
  },
  pink: {
    light: { 1: '#fffcfe', 2: '#fef7fb', 3: '#fee9f5', 4: '#fbdcef', 5: '#f6cee7', 6: '#efbfdd', 7: '#e7acd0', 8: '#dd93c2', 9: '#d6409f', 10: '#cf3897', 11: '#c2298a', 12: '#651249' },
    dark: { 1: '#191117', 2: '#21121d', 3: '#37172f', 4: '#4b143d', 5: '#591c47', 6: '#692955', 7: '#833869', 8: '#a84885', 9: '#d6409f', 10: '#de51a8', 11: '#ff8dcc', 12: '#fdd1ea' },
  },
  plum: {
    light: { 1: '#fefcff', 2: '#fdf7fd', 3: '#fbebfb', 4: '#f7def8', 5: '#f2d1f3', 6: '#e9c2ec', 7: '#deade3', 8: '#cf91d8', 9: '#ab4aba', 10: '#a144af', 11: '#953ea3', 12: '#53195d' },
    dark: { 1: '#181118', 2: '#201320', 3: '#351a35', 4: '#451d47', 5: '#512454', 6: '#5e3061', 7: '#734079', 8: '#92549c', 9: '#ab4aba', 10: '#b658c4', 11: '#e796f3', 12: '#f4d4f4' },
  },
  purple: {
    light: { 1: '#fefcfe', 2: '#fbf7fe', 3: '#f7edfe', 4: '#f2e2fc', 5: '#ead5f9', 6: '#e0c4f4', 7: '#d1afec', 8: '#be93e4', 9: '#8e4ec6', 10: '#8347b9', 11: '#8145b5', 12: '#402060' },
    dark: { 1: '#18111b', 2: '#1e1523', 3: '#301c3b', 4: '#3d224e', 5: '#48295c', 6: '#54346b', 7: '#664282', 8: '#8457aa', 9: '#8e4ec6', 10: '#9a5cd0', 11: '#d19dff', 12: '#ecd9fa' },
  },
  violet: {
    light: { 1: '#fdfcfe', 2: '#faf8ff', 3: '#f4f0fe', 4: '#ebe4ff', 5: '#e1d9ff', 6: '#d4cafe', 7: '#c2b5f5', 8: '#aa99ec', 9: '#6e56cf', 10: '#654dc4', 11: '#6550b9', 12: '#2f265f' },
    dark: { 1: '#14121f', 2: '#1b1525', 3: '#291f43', 4: '#33255b', 5: '#3c2e69', 6: '#473876', 7: '#56468b', 8: '#6958ad', 9: '#6e56cf', 10: '#7d66d9', 11: '#baa7ff', 12: '#e2ddfe' },
  },
  iris: {
    light: { 1: '#fdfdff', 2: '#f8f8ff', 3: '#f0f1fe', 4: '#e6e7ff', 5: '#dadcff', 6: '#cbcdff', 7: '#b8baf8', 8: '#9b9ef0', 9: '#5b5bd6', 10: '#5151cd', 11: '#5753c6', 12: '#272962' },
    dark: { 1: '#13131e', 2: '#171625', 3: '#202248', 4: '#262a65', 5: '#303374', 6: '#3d3e82', 7: '#4a4a95', 8: '#5958b1', 9: '#5b5bd6', 10: '#6e6ade', 11: '#b1a9ff', 12: '#e0dffe' },
  },
  indigo: {
    light: { 1: '#fdfdfe', 2: '#f7f9ff', 3: '#edf2fe', 4: '#e1e9ff', 5: '#d2deff', 6: '#c1d0ff', 7: '#abbdf9', 8: '#8da4ef', 9: '#3e63dd', 10: '#3358d4', 11: '#3a5bc7', 12: '#1f2d5c' },
    dark: { 1: '#11131f', 2: '#141726', 3: '#182449', 4: '#1d2e62', 5: '#253974', 6: '#304384', 7: '#3a4f97', 8: '#435db1', 9: '#3e63dd', 10: '#5472e4', 11: '#9eb1ff', 12: '#d6e1ff' },
  },
  blue: {
    light: { 1: '#fbfdff', 2: '#f4faff', 3: '#e6f4fe', 4: '#d5efff', 5: '#c2e5ff', 6: '#acd8fc', 7: '#8ec8f6', 8: '#5eb1ef', 9: '#0090ff', 10: '#0588f0', 11: '#0d74ce', 12: '#113264' },
    dark: { 1: '#0d1520', 2: '#111927', 3: '#0d2847', 4: '#003362', 5: '#004074', 6: '#104d87', 7: '#205d9e', 8: '#2870bd', 9: '#0090ff', 10: '#3b9eff', 11: '#70b8ff', 12: '#c2e6ff' },
  },
  cyan: {
    light: { 1: '#fafdfe', 2: '#f2fafb', 3: '#def7f9', 4: '#caf1f6', 5: '#b5e9f0', 6: '#9ddde7', 7: '#7dcedc', 8: '#3db9cf', 9: '#00a2c7', 10: '#0797b9', 11: '#107d98', 12: '#0d3c48' },
    dark: { 1: '#0b161a', 2: '#101b20', 3: '#082c36', 4: '#003848', 5: '#004558', 6: '#045468', 7: '#12677e', 8: '#11809c', 9: '#00a2c7', 10: '#23afd0', 11: '#4ccce6', 12: '#b6ecf7' },
  },
  teal: {
    light: { 1: '#fafefd', 2: '#f3fbf9', 3: '#e0f8f3', 4: '#ccf3ea', 5: '#b8eae0', 6: '#a1ded2', 7: '#83cdc1', 8: '#53b9ab', 9: '#12a594', 10: '#0d9b8a', 11: '#008573', 12: '#0d3d38' },
    dark: { 1: '#0d1514', 2: '#111c1b', 3: '#0d2d2a', 4: '#023b37', 5: '#084843', 6: '#145750', 7: '#1c6961', 8: '#207e73', 9: '#12a594', 10: '#0eb39e', 11: '#0bd8b6', 12: '#adf0dd' },
  },
  jade: {
    light: { 1: '#fbfefd', 2: '#f4fbf7', 3: '#e6f7ed', 4: '#d6f1e3', 5: '#c3e9d7', 6: '#acdec8', 7: '#8bceb6', 8: '#56ba9f', 9: '#29a383', 10: '#26997b', 11: '#208368', 12: '#1d3b31' },
    dark: { 1: '#0d1512', 2: '#121c18', 3: '#0f2e22', 4: '#0b3b2c', 5: '#114837', 6: '#1b5745', 7: '#246854', 8: '#2a7e68', 9: '#29a383', 10: '#27b08b', 11: '#1fd8a4', 12: '#adf0d4' },
  },
  green: {
    light: { 1: '#fbfefc', 2: '#f4fbf6', 3: '#e6f6eb', 4: '#d6f1df', 5: '#c4e8d1', 6: '#adddc0', 7: '#8eceaa', 8: '#5bb98b', 9: '#30a46c', 10: '#2b9a66', 11: '#218358', 12: '#193b2d' },
    dark: { 1: '#0e1512', 2: '#121b17', 3: '#132d21', 4: '#113b29', 5: '#174933', 6: '#20573e', 7: '#28684a', 8: '#2f7c57', 9: '#30a46c', 10: '#33b074', 11: '#3dd68c', 12: '#b1f1cb' },
  },
  grass: {
    light: { 1: '#fbfefb', 2: '#f5fbf5', 3: '#e9f6e9', 4: '#daf1db', 5: '#c9e8ca', 6: '#b2ddb5', 7: '#94ce9a', 8: '#65ba74', 9: '#46a758', 10: '#3e9b4f', 11: '#2a7e3b', 12: '#203c25' },
    dark: { 1: '#0e1511', 2: '#141a15', 3: '#1b2a1e', 4: '#1d3a24', 5: '#25482d', 6: '#2d5736', 7: '#366740', 8: '#3e7949', 9: '#46a758', 10: '#53b365', 11: '#71d083', 12: '#c2f0c2' },
  },
  orange: {
    light: { 1: '#fefcfb', 2: '#fff7ed', 3: '#ffefd6', 4: '#ffdfb5', 5: '#ffd19a', 6: '#ffc182', 7: '#f5ae73', 8: '#ec9455', 9: '#f76b15', 10: '#ef5f00', 11: '#cc4e00', 12: '#582d1d' },
    dark: { 1: '#17120e', 2: '#1e160f', 3: '#331e0b', 4: '#462100', 5: '#562800', 6: '#66350c', 7: '#7e451d', 8: '#a35829', 9: '#f76b15', 10: '#ff801f', 11: '#ffa057', 12: '#ffe0c2' },
  },
  brown: {
    light: { 1: '#fefdfc', 2: '#fcf9f6', 3: '#f6eee7', 4: '#f0e4d9', 5: '#ebdaca', 6: '#e4cdb7', 7: '#dcbc9f', 8: '#cea37e', 9: '#ad7f58', 10: '#a07553', 11: '#815e46', 12: '#3e332e' },
    dark: { 1: '#12110f', 2: '#1c1816', 3: '#28211d', 4: '#322922', 5: '#3e3128', 6: '#4d3c2f', 7: '#614a39', 8: '#7c5f46', 9: '#ad7f58', 10: '#b88c67', 11: '#dbb594', 12: '#f2e1ca' },
  },
  sky: {
    light: { 1: '#f9feff', 2: '#f1fafd', 3: '#e1f6fd', 4: '#d1f0fa', 5: '#bee7f5', 6: '#a9daed', 7: '#8dcae3', 8: '#60b3d7', 9: '#7ce2fe', 10: '#74daf8', 11: '#00749e', 12: '#1d3e56' },
    dark: { 1: '#0d141f', 2: '#111a27', 3: '#112840', 4: '#113555', 5: '#154467', 6: '#1b537b', 7: '#1f6692', 8: '#197cae', 9: '#7ce2fe', 10: '#a8eeff', 11: '#75c7f0', 12: '#c2f3ff' },
  },
  mint: {
    light: { 1: '#f9fefd', 2: '#f2fbf9', 3: '#ddf9f2', 4: '#c8f4e9', 5: '#b3ecde', 6: '#9ce0d0', 7: '#7ecfbd', 8: '#4cbba5', 9: '#86ead4', 10: '#7de0cb', 11: '#027864', 12: '#16433c' },
    dark: { 1: '#0e1515', 2: '#0f1b1b', 3: '#092c2b', 4: '#003a38', 5: '#004744', 6: '#105650', 7: '#1e685f', 8: '#277f70', 9: '#86ead4', 10: '#a8f5e5', 11: '#58d5ba', 12: '#c4f5e1' },
  },
  lime: {
    light: { 1: '#fcfdfa', 2: '#f8faf3', 3: '#eef6d6', 4: '#e2f0bd', 5: '#d3e7a6', 6: '#c2da91', 7: '#abc978', 8: '#8db654', 9: '#bdee63', 10: '#b0e64c', 11: '#5c7c2f', 12: '#37401c' },
    dark: { 1: '#11130c', 2: '#151a10', 3: '#1f2917', 4: '#29371d', 5: '#334423', 6: '#3d522a', 7: '#496231', 8: '#577538', 9: '#bdee63', 10: '#d4ff70', 11: '#bde56c', 12: '#e3f7ba' },
  },
  yellow: {
    light: { 1: '#fdfdf9', 2: '#fefce9', 3: '#fffab8', 4: '#fff394', 5: '#ffe770', 6: '#f3d768', 7: '#e4c767', 8: '#d5ae39', 9: '#ffe629', 10: '#ffdc00', 11: '#9e6c00', 12: '#473b1f' },
    dark: { 1: '#14120b', 2: '#1b180f', 3: '#2d2305', 4: '#362b00', 5: '#433500', 6: '#524202', 7: '#665417', 8: '#836a21', 9: '#ffe629', 10: '#ffff57', 11: '#f5e147', 12: '#f6eeb4' },
  },
  amber: {
    light: { 1: '#fefdfb', 2: '#fefbe9', 3: '#fff7c2', 4: '#ffee9c', 5: '#fbe577', 6: '#f3d673', 7: '#e9c162', 8: '#e2a336', 9: '#ffc53d', 10: '#ffba18', 11: '#ab6400', 12: '#4f3422' },
    dark: { 1: '#16120c', 2: '#1d180f', 3: '#302008', 4: '#3f2700', 5: '#4d3000', 6: '#5c3d05', 7: '#714f19', 8: '#8f6424', 9: '#ffc53d', 10: '#ffd60a', 11: '#ffca16', 12: '#ffe7b3' },
  },
  bronze: {
    light: { 1: '#fdfcfc', 2: '#fdf7f5', 3: '#f6edea', 4: '#efe4df', 5: '#e7d9d3', 6: '#dfcdc5', 7: '#d3bcb3', 8: '#c2a499', 9: '#a18072', 10: '#957468', 11: '#7d5e54', 12: '#43302b' },
    dark: { 1: '#141110', 2: '#1c1917', 3: '#262220', 4: '#302a27', 5: '#3b3330', 6: '#493e3a', 7: '#5a4c47', 8: '#6f5f58', 9: '#a18072', 10: '#ae8c7e', 11: '#d4b3a5', 12: '#ede0d9' },
  },
  gold: {
    light: { 1: '#fdfdfc', 2: '#faf9f2', 3: '#f2f0e7', 4: '#eae6db', 5: '#e1dccf', 6: '#d8d0bf', 7: '#cbc0aa', 8: '#b9a88d', 9: '#978365', 10: '#8c7a5e', 11: '#71624b', 12: '#3b352b' },
    dark: { 1: '#121211', 2: '#1b1a17', 3: '#24231f', 4: '#2d2b26', 5: '#38352e', 6: '#444039', 7: '#544f46', 8: '#696256', 9: '#978365', 10: '#a39073', 11: '#cbb99f', 12: '#e8e2d9' },
  },
} satisfies Record<Color, Record<Theme, ColorObject>>;

export type { Color, ColorObject, Theme };
export default COLORS;