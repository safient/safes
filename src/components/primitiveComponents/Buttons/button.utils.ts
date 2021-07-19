export const handleDefaultBackground = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.buttonPrimary}`;
    case 'secondary':
      return `${theme.colors.buttonSecondary}`;
    case 'ghost':
      return `${theme.colors.buttonGhost}`;
    case 'success':
      return `${theme.colors.buttonSuccess}`;
    case 'warning':
      return ` ${theme.colors.buttonWarning}`;
    case 'error':
      return ` ${theme.colors.buttonError}`;
    default:
      return `${theme.colors.buttonPrimary}`;
  }
};

export const handleDefaultButtonText = (variant: string, theme: any) => {
  switch (variant) {
    case 'ghost':
      return `${theme.colors.buttonGhostText}`;

    default:
      return `white`;
  }
};

export const handleActiveColors = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.textPrimary}`;
    case 'secondary':
      return `${theme.colors.textPrimaryLighter}`;
    case 'ghost':
      return `${theme.colors.buttonGhostText}`;
    case 'success':
      return `${theme.colors.buttonSuccessActive}`;
    case 'warning':
      return ` ${theme.colors.buttonWarningActive}`;
    case 'error':
      return ` ${theme.colors.buttonErrorActive}`;
    default:
      return `${theme.colors.textPrimary}`;
  }
};

export const handleBorderColors = (variant: string, theme: any) => {
  switch (variant) {
    case 'ghost':
      return `1px solid ${theme.colors.buttonGhostBorder}`;

    default:
      return `blue`;
  }
};
