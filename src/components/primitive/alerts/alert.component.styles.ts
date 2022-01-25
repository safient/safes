import styled from 'styled-components';
import { FONT_SIZE } from '../../../utils/typography';
import { styledAlertProps } from './alert.component.props';

const handelVariants = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.alertPrimaryText}`;
    case 'secondary':
      return `${theme.colors.alertSecondaryText}`;
    case 'success':
      return `${theme.colors.success}`;
    case 'warning':
      return ` ${theme.colors.warning}`;
    case 'error':
      return ` ${theme.colors.error}`;
    case 'info':
      return ` ${theme.colors.alertInfoText}`;
    default:
      return `${theme.colors.alertPrimaryText}`;
  }
};

const handelBackground = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.alertPrimaryBackground}`;
    case 'secondary':
      return `${theme.colors.alertSecondaryBackground}`;
    case 'success':
      return `${theme.colors.successLighter}`;
    case 'warning':
      return ` ${theme.colors.warningLight}`;
    case 'error':
      return ` ${theme.colors.errorLighter}`;
    case 'info':
      return ` ${theme.colors.alertInfoBackground}`;
    default:
      return `${theme.colors.alertPrimaryBackground}`;
  }
};

const handelBorders = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return `${theme.colors.alertPrimaryBorder}`;
    case 'secondary':
      return `${theme.colors.alertSecondaryBorder}`;
    case 'success':
      return `${theme.colors.alertSuccessBorder}`;
    case 'warning':
      return ` ${theme.colors.alertWarningBorder}`;
    case 'error':
      return ` ${theme.colors.alertErrorBorder}`;
    case 'info':
      return ` ${theme.colors.alertInfoBorder}`;
    default:
      return `${theme.colors.alertPrimaryBorder}`;
  }
};

const AlertContainer = styled.div<any | styledAlertProps>`
  max-width: 55rem;
  color: ${({ theme, variant }) => handelVariants(variant, theme)};
  background-color: ${({ variant, theme }) => handelBackground(variant, theme)};
  border: 1px solid ${({ variant, theme }) => handelBorders(variant, theme)};
  border-radius: 0.5rem;
  font-size: ${FONT_SIZE.regular};
  font-weight: 500;
  padding: 1.8rem;
`;

export { AlertContainer };
