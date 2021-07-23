import { FONT_SIZE, ALIGNMENTS } from '../../../utils/typography';

// styled component doesn't support varients natively- so we are using switch here.

const handleColor = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.textPrimary}`;
    case 'secondary':
      return `${theme.colors.textPrimaryLighter}`;
    case 'success':
      return `${theme.colors.textSuccess}`;
    case 'warning':
      return ` ${theme.colors.textWarning}`;
    case 'error':
      return ` ${theme.colors.textError}`;
    default:
      return `${theme.colors.textPrimary}`;
  }
};
// handel custom sizes later
const handleSize = (size: string, theme: any) => {
  switch (size) {
    case 'regular':
      return `${FONT_SIZE.regular}`;
    case 'medium':
      return `${FONT_SIZE.medium}`;
    default:
      return `${FONT_SIZE.regular}`;
  }
};

const handleTextAlign = (align: string, theme: any) => {
  switch (align) {
    case 'center':
      return `${ALIGNMENTS.center}`;
    case 'left':
      return `${ALIGNMENTS.left}`;
    case 'right':
      return `${ALIGNMENTS.right}`;
    case 'justify':
      return `${ALIGNMENTS.justify}`;
    default:
      return `${ALIGNMENTS.center}`;
  }
};

export { handleColor, handleSize, handleTextAlign };
