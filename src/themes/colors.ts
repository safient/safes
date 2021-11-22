import { palette } from './palette';

export const colors = {
  white: palette.white,
  black: palette.black,
  primary: palette.blue,
  primaryGradient: palette.blueIndigoGradient,
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
  border: palette.grey,
  borderLight: palette.greyLight,
  borderLighter: palette.greyLighter,
  navLinkActive: palette.blueTransparent,
  applicationBackground: palette.whiteLiac,
  spinnerBorder: palette.greyLighter,
};

export type Colors = typeof colors;
export type Color = keyof typeof colors;
