import { palette } from './palette';

export const colors = {
  white: palette.white,
  black: palette.black,
  primary: palette.blue,
  textDark: palette.grey,
  textLight: palette.greyLight,
  textLighter: palette.greyLighter, //placeholder and borders
  success: palette.green,
  successLight: palette.greenLight, //text
  error: palette.red,
  errorLight: palette.redLight, //text
  link: palette.blueLight,
  warning: palette.yellow,
  warningLight: palette.yellowLight, //text
  shadow: palette.shadow,
  modalBackdrop: palette.grayTransparent,
};

export type Colors = keyof typeof colors;
export type Color = typeof colors;
