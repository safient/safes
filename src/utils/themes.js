import { COLORS, SHADOWS } from './variables';

export const defaultTheme = {
  // TEXTS

  TEXTS: {
    textDark: COLORS.gray[900], //for heading
    textLight: COLORS.gray[500], //for body
  },

  // BOX SHADOW

  SHADOW: {
    default: SHADOWS.default,
  },

  // ALERTS

  ALERT: {
    warningColor: COLORS.yellow[100],
    warningColorHover: COLORS.yellow[50],
    errorColor: COLORS.red[100],
    errorColorHover: COLORS.red[50],
    successColor: COLORS.green[100],
    successColorHover: COLORS.green[50],
  },

  // STATUS
  STATUS: {
    warningColor: COLORS.yellow[400],
    warningColorHover: COLORS.yellow[300],
    errorColor: COLORS.red[400],
    errorColorHover: COLORS.red[500],
    successColor: COLORS.green[400],
    successColorHover: COLORS.green[500],
  },
};

export const darkTheme = {
  // primaryColor: neutralDark[100],
};
