import { palette } from './palette';

export const colors = {
  // Base Colors
  white: palette.accents.white,
  black: palette.accents.black,
  primary: palette.blue.main,

  // Texts
  textDark: palette.grey.main,
  textLight: palette.grey.light,
  textLighter: palette.grey.lighter, //placeholder and borders

  // Status

  success: palette.green.main,
  successLight: palette.green.light, //text
  error: palette.red.main,
  errorLight: palette.red.light, //text
  warning: palette.yellow.main,
  warningLight: palette.yellow.light, //text
};

export type Colors = keyof typeof colors;
export type Color = typeof colors;
