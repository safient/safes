// export const palette = {
//   //  Texts
//   textPrimary: '#111827',
//   textPrimaryLighter: '#6B7280',
//   textSuccess: '#00b74a',
//   textWarning: '#ffa900',
//   textError: '#f93154',

//   // ALERTS
//   alertPrimaryText: '#084298',
//   alertSecondaryText: '#41464b',
//   alertSuccessText: '#0f5132',
//   alertWarningText: '#664d03',
//   alertErrorText: '#842029',
//   alertInfoText: '#055160',
//   alertPrimaryBackground: '#cfe2ff',
//   alertSecondaryBackground: '#e2e3e5',
//   alertSuccessBackground: '#d1e7dd',
//   alertWarningBackground: '#fff3cd',
//   alertErrorBackground: '#f8d7da',
//   alertInfoBackground: '#cff4fc',
//   alertPrimaryBorder: '#b6d4fe',
//   alertSecondaryBorder: '#d3d6d8',
//   alertSuccessBorder: '#badbcc',
//   alertWarningBorder: '#ffecb5',
//   alertErrorBorder: '#f5c2c7',
//   alertInfoBorder: '#b6effb',

//   // BACKGROUNDS
//   backgroundPrimary: '#422ed1',
//   backgroundSecondary: '#rgba(142, 144, 166, 1)',
//   backgroundSuccess: '#198754',
//   backgroundError: '#dc3545',
//   backgroundWarning: '#ffc107',
//   backgroundLight: '#f8f9fa',
//   backgroundDark: '#212529',
//   backgroundTransparent: '#transparent',
//   backgroundWhite: '#fff',
//   backgroundAccent: '#F6F7FB',

//   // BUTTONS -background

//   buttonPrimary: '#422ed1',
//   buttonPrimaryDisabled: 'rgba(66, 46, 209, 0.45)',
//   buttonSecondary: 'rgba(142, 144, 166, 1)',
//   buttonSecondaryBorder: 'rgba(142, 144, 166, 1)',
//   buttonSecondaryHover: '#fff',
//   buttonSecondaryDisabled: 'rgba(66, 46, 209, 0.45)',
//   buttonGhost: '#fff',
//   buttonGhostHover: '#422ed1',
//   buttonGhostText: '#8E90A6',
//   buttonGhostBorder: '#8E90A6',
//   ghostHoverText: '#422ed1',

//   buttonSuccess: '#0B7247',
//   buttonSuccessActive: '#276738',
//   buttonSuccessHover: '#367b48',

//   buttonWarning: '#CAB23F',
//   buttonWarningActive: '#b49e35',

//   buttonWarningHover: '#cab23f',
//   buttonError: '#DB2A30',
//   buttonErrorActive: '#DB2A30',
//   buttonErrorHover: '#b54248',
// };
// export type Palette = typeof palette;

export const palette = {
  green: {
    greenDefault: '#2ba745',
    greenLight: '#0f5132', //green text color
    greenLighter: '#d1e7dd', //alert bg
    greenDark: '#065f43', //for icons
  },
  royalBlue: {
    royalBlueDefault: '#422ED1', //button backgrounds
    royalBlueDark: '#081336', //side menus
    royalBlueLight: '#d9d5f6', //alert, icon backgrounds
  },
  blue: {
    blueDefault: '#084298', //texts
    blueLight: '#cfe2ff', //for bg
    blueLighter: '#b6d4fe', //for border
  },
  red: {
    redDefault: '#dc3545',
    redLight: '#842029', //text color on alert bg
    redLighter: '#f8d7da', // alert bg
    redLightest: '#f5c2e7', //borders
  },
  yellow: {
    yellowDefault: '#dc3545',
    yellowLight: '#d3c789', //button bg
    yellowLighter: '#664d03', //for text
    yellowLightest: '#fff3cd',
  },
  grey: {
    greyDefault: '#28293d', // default headings
    greyLight: '#6B7280',
    greyLighter: '#F0F0F0',
    greyLightest: '#555770', //for placeholders
    greyText: '#41464b', // text on grey bg
    greyBackground: '#8E90A6', //secondary btn color
  },
  neutrals: {
    white: '#fff',
    black: '#000',
    ghostWhite: '#F6F7FB', //app background
    ghostWhiteLight: '#F9FAFB', //card, form, model accent color
  },
};

export type Palette = typeof palette;
