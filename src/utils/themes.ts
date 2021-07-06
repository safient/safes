import {
  COLORS,
  SHADOWS,
  FONT_SIZE,
  SPACES,
  FONT_WEIGHT,
  LINE_HEIGHTS,
} from './variables';

export const defaultTheme = {
  // TEXTS

  TEXTS: {
    textDark: COLORS.gray[900], //for heading
    textLight: COLORS.gray[500], //for body
  },

  // FONT-SIZE
  FONT: {
    normal: FONT_SIZE.NORMAL, //16px
    heading: FONT_SIZE.HEADING, //20px
  },

  // FONT-WEIGHT

  FONT_WEIGHT: {
    regular: FONT_WEIGHT.REGULAR, //500
    bold: FONT_WEIGHT.SEMI_BOLD, //600
  },

  // SPACES

  SPACES: {
    0: '0rem',
    2: '0.2rem',
    4: '0.4rem',
    6: '0.6rem',
    8: '0.8rem',
    10: '1rem',
    12: '1.2rem',
    14: '1.4rem',
    16: '1.6rem',
    18: '1.8rem',
    20: '2.0rem',
    22: '2.2rem',
    24: '2.4rem',
    26: '2.6rem',
    28: '2.8rem',
    30: '3.0rem',
    32: '3.2rem',
    34: '3.4rem',
    36: '3.6rem',
  },

  // BUTTONS

  BUTTON: {
    secondary: {
      backgroundColor: '#fff',
      color: 'rgba(142, 144, 166, 1)',
      border: '1px solid rgba(142, 144, 166, 1)',
    },
    secondaryHover: {
      backgroundColor: '#fff',
      border: '1px solid #422ed1',
      color: '#422ed1',
    },
    secondaryDisabled: {
      backgroundColor: 'rgba(66, 46, 209, 0.45)',
      color: '#fff',
    },

    warning: {
      backgroundColor: '#CAB23F',
      color: ' #fff',
    },
    warningHover: {
      backgroundColor: '#cab23f',
    },
    warningActive: {
      backgroundColor: '#b49e35',
    },
    error: {
      backgroundColor: '#DB2A30',
      color: ' #fff',
    },
    errorHover: {
      backgroundColor: '#b54248',
    },
    errorActive: {
      backgroundColor: ' #95353a',
    },

    success: {
      backgroundColor: ' #0B7247',
      active: '#276738',
      hover: '#367b48',
    },

    successActive: '#276738',
    primaryButton: {
      backgroundColor: '#422ed1',
      color: '#fff',
      disabled: 'rgba(66, 46, 209, 0.45)',
    },

    padding: '0.8rem 1.2rem',
    borderRadius: '0.2rem',
    baseActive: '#3d24f1',
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
    errorColor: COLORS.red[500],
    errorColorHover: COLORS.red[500],
    successColor: COLORS.green[500],
    successColorHover: COLORS.green[500],
  },
};

export const darkTheme = {
  // primaryColor: neutralDark[100],
};
