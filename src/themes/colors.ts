import { palette } from './palette';

export const colors = {
  white: palette.white,
  black: palette.black,
  primary: palette.royalBlue,
  primaryGradient: palette.blueIndigoGradient,
  textDark: palette.grey,
  textLight: palette.greyLight,
  textLighter: palette.greyLighter, //placeholder and borders
  success: palette.green,
  successLight: palette.greenLight, //text
  successLighter: palette.greenTransparent, // Transparent Backgrounds
  successLightest: palette.greenLighter, // alert background
  error: palette.red,
  errorLight: palette.redLight, //text
  errorLighter: palette.redTransparent,
  errorLightest: palette.redLighter, // alert background
  infoLight: palette.blueLight, // alert text
  infoLightest: palette.blueLighter, // alert background
  link: palette.royalBlueLight,
  warning: palette.yellow,
  warningLight: palette.yellowLight, //text
  warningLightest: palette.yellowLighter, // alerr background
  shadow: palette.shadow,
  modalBackdrop: palette.grayTransparent,
  border: palette.grey,
  borderLight: palette.greyLight,
  borderLighter: palette.greyLighter,
  borderLightest: palette.greyLightest,
  navLinkActive: palette.royalBlueTransparent,
  applicationBackground: palette.whiteLiac,
  spinnerBorder: palette.greyLighter,
  toggleSwitchBackground: palette.royalBlueLighter,
  lightGray: palette.lightGray,
};

export type Colors = typeof colors;
export type Color = keyof typeof colors;
