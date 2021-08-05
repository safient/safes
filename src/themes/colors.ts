import { palette } from './palette';

// export interface Colors {
//   //  Texts
//   textPrimary: string;
//   textPrimaryLighter: string;
//   textSuccess: string;
//   textWarning: string;
//   textError: string;

//   // ALERTS

//   alertPrimaryText: string;
//   alertSecondaryText: string;
//   alertSuccessText: string;
//   alertWarningText: string;
//   alertErrorText: string;
//   alertInfoText: string;
//   alertPrimaryBackground: string;
//   alertSecondaryBackground: string;
//   alertSuccessBackground: string;
//   alertWarningBackground: string;
//   alertErrorBackground: string;
//   alertInfoBackground: string;
//   alertPrimaryBorder: string;
//   alertSecondaryBorder: string;
//   alertSuccessBorder: string;
//   alertWarningBorder: string;
//   alertErrorBorder: string;
//   alertInfoBorder: string;

//   // BACKGROUNDS
//   backgroundPrimary: string;
//   backgroundSecondary: string;
//   backgroundSuccess: string;
//   backgroundError: string;
//   backgroundWarning: string;
//   backgroundLight: string;
//   backgroundDark: string;
//   backgroundTransparent: string;
//   backgroundAccent: string;

//   // BUTTONS

//   buttonPrimary: string;
//   buttonSecondary: string;
//   buttonSecondaryHover: string;
//   buttonSecondaryDisabled: string;
//   buttonSuccess: string;
//   buttonSuccessActive: string;
//   buttonSuccessHover: string;
//   buttonWarning: string;
//   buttonWarningActive: string;
//   buttonWarningHover: string;
//   buttonError: string;
//   buttonErrorActive: string;
//   buttonErrorHover: string;
// }
// export type ColorTypes = keyof Colors;

export const colors = {
  //  Texts
  textPrimary: palette.grey.greyDefault,
  textPrimaryLight: palette.grey.greyLight,
  textSuccess: palette.green.greenLighter,
  textWarning: palette.yellow.yellowLighter,
  textError: palette.red.redLight,

  // ALERTS
  alertPrimaryText: '#084298',
  alertSecondaryText: '#41464b',
  alertSuccessText: palette.green.greenLight,
  alertWarningText: '#664d03',
  alertErrorText: '#842029',
  alertInfoText: '#055160',
  alertPrimaryBackground: '#cfe2ff',
  alertSecondaryBackground: '#e2e3e5',
  alertSuccessBackground: '#d1e7dd',
  alertWarningBackground: '#fff3cd',
  alertErrorBackground: '#f8d7da',
  alertInfoBackground: '#cff4fc',
  alertPrimaryBorder: '#b6d4fe',
  alertSecondaryBorder: '#d3d6d8',
  alertSuccessBorder: '#badbcc',
  alertWarningBorder: '#ffecb5',
  alertErrorBorder: '#f5c2c7',
  alertInfoBorder: '#b6effb',

  // BACKGROUNDS
  backgroundPrimary: '#422ed1',
  backgroundSecondary: '#rgba(142, 144, 166, 1)',
  backgroundSuccess: '#198754',
  backgroundError: '#dc3545',
  backgroundWarning: '#ffc107',
  backgroundLight: '#f8f9fa',
  backgroundDark: '#212529',
  backgroundTransparent: '#transparent',
  backgroundWhite: '#fff',
  backgroundAccent: '#F6F7FB',

  // BUTTONS -background

  buttonPrimary: '#422ed1',
  buttonPrimaryDisabled: 'rgba(66, 46, 209, 0.45)',
  buttonSecondary: 'rgba(142, 144, 166, 1)',
  buttonSecondaryBorder: 'rgba(142, 144, 166, 1)',
  buttonSecondaryHover: '#fff',
  buttonSecondaryDisabled: 'rgba(66, 46, 209, 0.45)',
  buttonGhost: '#fff',
  buttonGhostHover: '#422ed1',
  buttonGhostText: '#8E90A6',
  buttonGhostBorder: '#8E90A6',
  ghostHoverText: '#422ed1',

  buttonSuccess: '#0B7247',
  buttonSuccessActive: '#276738',
  buttonSuccessHover: '#367b48',

  buttonWarning: '#CAB23F',
  buttonWarningActive: '#b49e35',

  buttonWarningHover: '#cab23f',
  buttonError: '#DB2A30',
  buttonErrorActive: '#DB2A30',
  buttonErrorHover: '#b54248',
};

export type ColorTypes = typeof colors;
