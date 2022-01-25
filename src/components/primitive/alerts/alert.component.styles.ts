import styled from 'styled-components';
import { Box } from 'components/primitive';
import { AlertComponentProps } from './alert.component.props';

/**
 * Base style which can be inherited.
 */
export const Base = styled(Box)<AlertComponentProps>`
  max-width: 55rem !important;
  flex: 0 !important;
  background: ${({ theme: { colors } }) => colors.success};
  color: ${({ theme: { colors } }) => colors.primary} !important;
  padding: 2rem !important ;
  border-radius: 0.5rem;
  gap: 1rem;
`;

/**
 * Styles for success variant
 */
export const SuccessAlert = styled(Base)`
  background: ${({ theme: { colors } }) => colors.successLightest};
`;

/**
 * Styles for Error variant
 */
export const ErrorAlert = styled(Base)`
  background: ${({ theme: { colors } }) => colors.errorLightest};
`;

/**
 * Styles for Warning variant
 */
export const WarningAlert = styled(Base)`
  background: ${({ theme: { colors } }) => colors.warningLightest};
`;
