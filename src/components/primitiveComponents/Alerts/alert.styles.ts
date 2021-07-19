import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT } from '../../../utils/typography';
import { Variants, styledAlertProps } from './alert.props';

export const handelVariants = (variant: string, theme: any) => {
  switch (variant) {
    case Variants.PRIMARY:
      return `${theme.colors.alertPrimaryText}`;
    case Variants.SECONDARY:
      return `${theme.colors.alertSecondaryText}`;
    case Variants.SUCCESS:
      return `${theme.colors.alertSuccessText}`;
    case Variants.WARNING:
      return ` ${theme.colors.alertWarningText}`;
    case Variants.ERROR:
      return ` ${theme.colors.alertErrorText}`;
    case Variants.INFO:
      return ` ${theme.colors.alertInfoText}`;
    default:
      return `${theme.colors.alertPrimaryText}`;
  }
};

export const handelBackground = (variant: string, theme: any) => {
  switch (variant) {
    case Variants.PRIMARY:
      return `${theme.colors.alertPrimaryBackground}`;
    case Variants.SECONDARY:
      return `${theme.colors.alertSecondaryBackground}`;
    case Variants.SUCCESS:
      return `${theme.colors.alertSuccessBackground}`;
    case Variants.WARNING:
      return ` ${theme.colors.alertWarningBackground}`;
    case Variants.ERROR:
      return ` ${theme.colors.alertErrorBackground}`;
    case Variants.INFO:
      return ` ${theme.colors.alertInfoBackground}`;
    default:
      return `${theme.colors.alertPrimaryBackground}`;
  }
};

export const handelBorders = (variant: string, theme: any) => {
  switch (variant) {
    case Variants.PRIMARY:
      return `${theme.colors.alertPrimaryBorder}`;
    case Variants.SECONDARY:
      return `${theme.colors.alertSecondaryBorder}`;
    case Variants.SUCCESS:
      return `${theme.colors.alertSuccessBorder}`;
    case Variants.WARNING:
      return ` ${theme.colors.alertWarningBorder}`;
    case Variants.ERROR:
      return ` ${theme.colors.alertErrorBorder}`;
    case Variants.INFO:
      return ` ${theme.colors.alertInfoBorder}`;
    default:
      return `${theme.colors.alertPrimaryBorder}`;
  }
};

export const AlertContainer = styled.div<any | styledAlertProps>`
  max-width: 55rem;
  color: ${({ theme, variant }) => handelVariants(variant, theme)};
  background-color: ${({ variant, theme }) => handelBackground(variant, theme)};
  border: 1px solid ${({ variant, theme }) => handelBorders(variant, theme)};
  border-radius: 0.5rem;
  font-size: ${FONT_SIZE.regular};
  font-weight: 500;
  padding: 1.8rem;
`;
