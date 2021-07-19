import styled from 'styled-components';
import { FONT_SIZE, ALIGNMENTS } from '../../../utils/typography';
import { Variants, FontSizes, Align, StyledTextProps } from './text.props';

// styled component doesn't support varients natively- so we are using switch here.

const handleColor = (variant: string, theme: any) => {
  switch (variant) {
    case Variants.PRIMARY:
      return `${theme.colors.textPrimary}`;
    case Variants.SECONDARY:
      return `${theme.colors.textPrimaryLighter}`;
    case Variants.SUCCESS:
      return `${theme.colors.textSuccess}`;
    case Variants.WARNING:
      return ` ${theme.colors.textWarning}`;
    case Variants.ERROR:
      return ` ${theme.colors.textError}`;
    default:
      return `${theme.colors.textPrimary}`;
  }
};
// handel custom sizes later
export const handleSize = (size: string, theme: any) => {
  switch (size) {
    case FontSizes.REGULAR:
      return `${FONT_SIZE.regular}`;
    case FontSizes.MEDIUM:
      return `${FONT_SIZE.medium}`;
    default:
      return `${FONT_SIZE.regular}`;
  }
};

export const handleTextAlign = (align: string, theme: any) => {
  switch (align) {
    case Align.CENTER:
      return `${ALIGNMENTS.center}`;
    case Align.LEFT:
      return `${ALIGNMENTS.left}`;
    case Align.RIGHT:
      return `${ALIGNMENTS.right}`;
    case Align.JUSTIFY:
      return `${ALIGNMENTS.justify}`;
    default:
      return `${ALIGNMENTS.center}`;
  }
};

export const Typography = styled.h1<StyledTextProps>`
  color: ${({ theme, variant }) => handleColor(variant, theme)};
  font-size: ${({ theme, size }) => handleSize(size, theme)};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  text-align: ${({ align, theme }) => handleTextAlign(align, theme)};
  line-height: 1;
`;
