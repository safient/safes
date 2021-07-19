export interface Colors {
  //  Texts
  textPrimary: string;
  textPrimaryLighter: string;
  textSuccess: string;
  textWarning: string;
  textError: string;

  // ALERTS

  alertPrimaryText: string;
  alertSecondaryText: string;
  alertSuccessText: string;
  alertWarningText: string;
  alertErrorText: string;
  alertInfoText: string;
  alertPrimaryBackground: string;
  alertSecondaryBackground: string;
  alertSuccessBackground: string;
  alertWarningBackground: string;
  alertErrorBackground: string;
  alertInfoBackground: string;
  alertPrimaryBorder: string;
  alertSecondaryBorder: string;
  alertSuccessBorder: string;
  alertWarningBorder: string;
  alertErrorBorder: string;
  alertInfoBorder: string;

  // BACKGROUNDS
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundSuccess: string;
  backgroundError: string;
  backgroundWarning: string;
  backgroundLight: string;
  backgroundDark: string;
  backgroundTransparent: string;
  backgroundAccent: string;

  // BUTTONS

  buttonPrimary: string;
  buttonSecondary: string;
  buttonSecondaryHover: string;
  buttonSecondaryDisabled: string;
  buttonSuccess: string;
  buttonSuccessActive: string;
  buttonSuccessHover: string;
  buttonWarning: string;
  buttonWarningActive: string;
  buttonWarningHover: string;
  buttonError: string;
  buttonErrorActive: string;
  buttonErrorHover: string;
}
export type ColorTypes = keyof Colors;
