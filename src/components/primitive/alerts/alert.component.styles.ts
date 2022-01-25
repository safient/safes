import styled from 'styled-components';
import { Box } from '../box/box.component';
import { AlertComponentProps } from './alert.component.props';

export const Base = styled(Box)<AlertComponentProps>`
  max-width: 55rem !important;
  flex: 0 !important;
  background: ${({ theme: { colors } }) => colors.success};
  color: ${({ theme: { colors } }) => colors.primary} !important;
  padding: 2rem !important ;
  border-radius: 0.5rem;
  gap: 1rem;
`;

export const SuccessAlert = styled(Base)`
  background: ${({ theme: { colors } }) => colors.successLightest};
`;

export const ErrorAlert = styled(Base)`
  background: ${({ theme: { colors } }) => colors.errorLightest};
`;

export const WarningAlert = styled(Base)`
  background: ${({ theme: { colors } }) => colors.warningLightest};
`;
