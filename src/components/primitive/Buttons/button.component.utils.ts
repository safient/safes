const handleDefaultBackground = (variant: string, theme: any): string => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.primary}`;

    case 'ghost':
      return `${theme.colors.white}`;
    case 'success':
      return `${theme.colors.success}`;
    case 'warning':
      return ` ${theme.colors.warning}`;
    case 'error':
      return ` ${theme.colors.error}`;
    default:
      return `${theme.colors.primary}`;
  }
};

const handleDefaultButtonText = (variant: string, theme: any): string => {
  switch (variant) {
    case 'ghost':
      return `${theme.colors.textLight}`;

    default:
      return `white`;
  }
};

const handleActiveColors = (variant: string, theme: any): string => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.primary}`;
    case 'ghost':
      return `${theme.colors.greyLight}`;
    case 'success':
      return `${theme.colors.successLighter}`;
    case 'warning':
      return ` ${theme.colors.warningLighter}`;
    case 'error':
      return ` ${theme.colors.errorLighter}`;
    default:
      return `${theme.colors.primary}`;
  }
};

const handleBorderColors = (variant: string, theme: any): string => {
  switch (variant) {
    case 'ghost':
      return `1px solid ${theme.colors.textLighter}`;
    default:
      return `blue`;
  }
};

export { handleDefaultBackground, handleDefaultButtonText, handleActiveColors, handleBorderColors };
