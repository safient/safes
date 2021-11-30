import styled from 'styled-components';
import { Box, Text } from '..';

export const BaseBadge = styled(Box)`
  height: 3.5rem;
  width: fit-content;
  padding: 1.2rem 0.6rem !important;
  min-width: 10.5rem !important;
  border-radius: 0.4rem;
  border: none;
`;

/**
 * Success Danger Warning
 */
export const SuccessBadge = styled(BaseBadge)`
  background-color: ${({ theme: { colors } }) => colors.primary} !important;
`;

export const DangerBadge = styled(BaseBadge)`
  background-color: ${({ theme: { colors } }) => colors.primary} !important;
`;

export const WarningBadge = styled(BaseBadge)`
  background-color: ${({ theme: { colors } }) => colors.primary} !important;
`;

export const ButtonText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
`;
