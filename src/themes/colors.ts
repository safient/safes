import { palette } from './palette';

// export const colors = {
//   //  Texts
//   textPrimary: palette.grey.greyDefault,
//   textPrimaryLight: palette.grey.greyLight,
//   textSuccess: palette.green.greenLighter,
//   textWarning: palette.yellow.yellowLighter,
//   textError: palette.red.redLight,

//   // ALERTS
//   alertPrimaryText: palette.blue.blueDefault,
//   alertSecondaryText: palette.grey.greyText,
//   alertSuccessText: palette.green.greenLight,
//   alertWarningText: palette.yellow.yellowLighter,
//   alertErrorText: palette.red.redLight,
//   alertInfoText: palette.aquaBlue.aquaBlueDefault,
//   alertPrimaryBackground: palette.blue.blueLight,
//   alertSecondaryBackground: palette.grey.greyAlertBackground,
//   alertSuccessBackground: palette.green.greenLighter,
//   alertWarningBackground: palette.yellow.yellowLightest,
//   alertErrorBackground: palette.red.redLighter,
//   alertInfoBackground: palette.aquaBlue.aquaBlueLight,
//   alertPrimaryBorder: palette.blue.blueLighter,
//   alertSecondaryBorder: palette.grey.greyAlertBorder,
//   alertSuccessBorder: palette.green.greenLightest,
//   alertWarningBorder: palette.yellow.yellowBorder,
//   alertErrorBorder: palette.red.redLightest,
//   alertInfoBorder: palette.aquaBlue.aquaBlueLighter,

//   // BACKGROUNDS
//   backgroundPrimary: palette.royalBlue.royalBlueDefault,
//   backgroundSecondary: palette.royalBlue.royalBlueDark, //sidemenu
//   backgroundSuccess: palette.green.greenDefault,
//   backgroundError: palette.red.redDefault,
//   backgroundWarning: palette.yellow.yellowDefault,
//   backgroundTransparent: '#transparent',
//   backgroundAccent: palette.neutrals.ghostWhite, //for app bg- ghost white
//   backgroundAccentLight: palette.neutrals.ghostWhiteLight, //card. form accent color

//   // BUTTONS -background

//   buttonPrimary: palette.royalBlue.royalBlueDefault,
//   buttonSecondary: palette.grey.greyBackground,
//   buttonGhost: palette.neutrals.white,
//   buttonGhostBorder: palette.grey.greyAlertBorder,
//   buttonGhostText: palette.grey.greyText,
//   buttonSuccess: palette.green.greenDefault,
//   buttonWarning: palette.yellow.yellowDefault,
//   buttonError: palette.red.redDefault,
// };

// export type ColorTypes = typeof colors;

export const colors = {
  // Base Colors
  white: palette.accents.white,
  black: palette.accents.black,
  primary: palette.royalBlue.main,

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

export type ColorTypes = keyof typeof colors;
