export const palette = {
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
  blue: {
    main: '#5452F6', //button backgrounds
    light: 'rgba(84, 82, 246, 0.2)', //alert, icon backgrounds
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

export type Palette = typeof palette;
