// export const palette = {
//   green: {
//     greenDefault: '#2ba745',
//     greenLight: '#0f5132', //green text color
//     greenLighter: '#d1e7dd', //alert bg
//     greenLightest: '#badbcc', //for border
//     greenDark: '#065f43', //for icons
//   },
//   royalBlue: {
//     royalBlueDefault: '#422ED1', //button backgrounds
//     royalBlueDark: '#081336', //side menus
//     royalBlueLight: '#d9d5f6', //alert, icon backgrounds
//   },
//   blue: {
//     blueDefault: '#084298', //texts
//     blueLight: '#cfe2ff', //for bg
//     blueLighter: '#b6d4fe', //for border
//   },
//   aquaBlue: {
//     aquaBlueDefault: '#055160', // text color
//     aquaBlueLight: '#cff4fc', //background
//     aquaBlueLighter: '#b6effb', //border
//   },
//   red: {
//     redDefault: '#dc3545',
//     redLight: '#842029', //text color on alert bg
//     redLighter: '#f8d7da', // alert bg
//     redLightest: '#f5c2c7', //borders
//   },
//   yellow: {
//     yellowDefault: '#ffc107', //default yellow color
//     yellowLight: '#d3c789', //button bg
//     yellowLighter: '#664d03', //for text
//     yellowLightest: '#fff3cd', //alert bg
//     yellowBorder: '#ffecb5', //yellow borders
//   },
//   grey: {
//     greyDefault: '#28293d', // default headings
//     greyLight: '#55577d',
//     greyLighter: '#F0F0F0',
//     greyLightest: '#555770', //for placeholders
//     greyText: '#41464b', // text on grey bg
//     greyBackground: '#8E90A6', //secondary btn color
//     greyAlertBackground: '#e2e3e5', // alert bg color
//     greyAlertBorder: '#d3d6d8', //alert border color
//   },
//   neutrals: {
//     white: '#fff',
//     black: '#000',
//     ghostWhite: '#F6F7FB', //app background
//     ghostWhiteLight: '#F9FAFB', //card, form, model accent color
//   },
// };

// export type Palette = typeof palette;

interface Accents {
  white: string;
  black: string;
  whiteLiac: string;
  athensGrey: string;
}

interface AquaBlue {
  main: string;
  light: string;
  lighter: string;
}

interface RoyalBlue {
  main: string;
  light: string;
}

interface Green {
  main: string;
  light: string;
  lighter: string;
  lightest: string;
  dark: string;
}

interface Yellow {
  main: string;
  light: string;
  lighter: String;
  lightest: String;
}

interface Red {
  main: string;
  light: string;
  lighter: string;
  lightest: string;
}

interface Grey {
  main: string;
  light: string;
  lighter: string;
}
export interface Palette {
  accents: Accents;
  aquaBlue: AquaBlue;
  royalBlue: RoyalBlue;
  green: Green;
  yellow: Yellow;
  red: Red;
  grey: Grey;
}

export const palette: Palette = {
  accents: {
    white: '#fff',
    black: '#000',
    whiteLiac: '#F6F7FB', //app background
    athensGrey: '#F9FAFB', // model, card bg
  },
  // aqua blue- for info alert
  aquaBlue: {
    main: '#055160', // text color
    light: '#cff4fc', //background
    lighter: '#b6effb', //border
  },
  royalBlue: {
    main: '#422ED1', //button backgrounds
    light: 'rgba(66, 46, 209, 0.2)', //alert, icon backgrounds
  },
  green: {
    main: '#2ba745',
    light: '#0f5132', //green text color
    lighter: '#d1e7dd', //alert bg
    lightest: '#badbcc', //for border
    dark: '#065f43', //for icons
  },
  yellow: {
    main: '#ffc107', //default yellow color
    light: '#664d03', //for text
    lighter: '#fff3cd', //alert bg
    lightest: '#ffecb5', //border
  },
  red: {
    main: '#dc3545',
    light: '#842029', //text color on alert bg
    lighter: '#f8d7da', // alert bg
    lightest: '#f5c2c7', //borders
  },
  grey: {
    main: '#28293d', // default dark headings
    light: '#555770', // light heading, body text
    lighter: '#8E90A6', //for placeholders and secondary button, border
  },
};
