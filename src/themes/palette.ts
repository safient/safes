export const palette = {
  green: {
    greenDefault: '#2ba745',
    greenLight: '#0f5132', //green text color
    greenLighter: '#d1e7dd', //alert bg
    greenLightest: '#badbcc', //for border
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
  aquaBlue: {
    aquaBlueDefault: '#055160', // text color
    aquaBlueLight: '#cff4fc', //background
    aquaBlueLighter: '#b6effb', //border
  },
  red: {
    redDefault: '#dc3545',
    redLight: '#842029', //text color on alert bg
    redLighter: '#f8d7da', // alert bg
    redLightest: '#f5c2c7', //borders
  },
  yellow: {
    yellowDefault: '#ffc107', //default yellow color
    yellowLight: '#d3c789', //button bg
    yellowLighter: '#664d03', //for text
    yellowLightest: '#fff3cd', //alert bg
    yellowBorder: '#ffecb5', //yellow borders
  },
  grey: {
    greyDefault: '#28293d', // default headings
    greyLight: '#55577d',
    greyLighter: '#F0F0F0',
    greyLightest: '#555770', //for placeholders
    greyText: '#41464b', // text on grey bg
    greyBackground: '#8E90A6', //secondary btn color
    greyAlertBackground: '#e2e3e5', // alert bg color
    greyAlertBorder: '#d3d6d8', //alert border color
  },
  neutrals: {
    white: '#fff',
    black: '#000',
    ghostWhite: '#F6F7FB', //app background
    ghostWhiteLight: '#F9FAFB', //card, form, model accent color
  },
};

export type Palette = typeof palette;
