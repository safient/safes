import { palette } from '../palette';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    //  Texts
    textPrimary: palette.textPrimary,
    textPrimaryLighter: palette.textPrimaryLighter,
    textSuccess: palette.textSuccess,
    textWarning: palette.textWarning,
    textError: palette.textError,

    // ALERTS
    alertPrimaryText: palette.alertPrimaryText,
    alertSecondaryText: palette.alertSecondaryText,
    alertSuccessText: palette.alertSuccessText,
    alertWarningText: palette.alertWarningText,
    alertErrorText: palette.alertErrorText,
    alertInfoText: palette.alertInfoText,
    alertPrimaryBackground: palette.alertPrimaryBackground,
    alertSecondaryBackground: palette.alertSecondaryBackground,
    alertSuccessBackground: palette.alertSuccessBackground,
    alertWarningBackground: palette.alertWarningBackground,
    alertErrorBackground: palette.alertErrorBackground,
    alertInfoBackground: palette.alertInfoBackground,
    alertPrimaryBorder: palette.alertPrimaryBorder,
    alertSecondaryBorder: palette.alertSecondaryBorder,
    alertSuccessBorder: palette.alertSuccessBorder,
    alertWarningBorder: palette.alertWarningBorder,
    alertErrorBorder: palette.alertErrorBorder,
    alertInfoBorder: palette.alertInfoBorder,

    // BACKGROUNDS
    backgroundPrimary: palette.backgroundPrimary,
    backgroundSecondary: palette.backgroundSecondary,
    backgroundSuccess: palette.backgroundSuccess,
    backgroundError: palette.backgroundError,
    backgroundWarning: palette.backgroundWarning,
    backgroundLight: palette.backgroundLight,
    backgroundDark: palette.backgroundDark,
    backgroundTransparent: palette.backgroundTransparent,
    backgroundWhite: palette.backgroundWhite,
    backgroundAccent: palette.backgroundAccent,

    // BUTTONS -background

    buttonPrimary: palette.buttonPrimary,

    buttonPrimaryDisabled: palette.buttonPrimaryDisabled,
    buttonSecondary: palette.buttonSecondary,
    buttonSecondaryBorder: palette.buttonSecondaryBorder,
    // sec-active
    buttonSecondaryHover: palette.buttonSecondaryHover,
    buttonSecondaryDisabled: palette.buttonSecondaryDisabled,
    buttonGhost: palette.buttonGhost,
    buttonGhostHover: palette.buttonGhostHover,
    buttonGhostText: palette.buttonGhostText,
    buttonGhostBorder: palette.buttonGhostBorder,
    buttonSuccess: palette.buttonSuccess,
    buttonSuccessActive: palette.buttonSuccessActive,
    buttonSuccessHover: palette.buttonSuccessHover,
    buttonWarning: palette.buttonWarning,
    buttonWarningActive: palette.buttonWarningActive,
    buttonWarningHover: palette.buttonWarningHover,
    buttonError: palette.buttonError,
    buttonErrorActive: palette.buttonErrorActive,
    buttonErrorHover: palette.buttonErrorHover,
  },
};
