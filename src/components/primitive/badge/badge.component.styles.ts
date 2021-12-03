import styled from 'styled-components';
import { Box, Text } from 'components/primitive';

/**
 * Base styles for Badge Component.
 */
export const BaseBadge = styled(Box)`
  height: 3.3rem !important;
  width: fit-content;
  padding: 1.2rem 0.6rem !important;
  min-width: 10.5rem !important;
  border-radius: 0.4rem;
  border: none;
  align-content: center !important;
`;

/**
 * Style for SuccessBadge.
 */
export const SuccessBadge = styled(BaseBadge)`
  background-color: ${({ theme: { colors } }) => colors.successLighter} !important;
`;

/**
 * Style for DangerBadge.
 */
export const DangerBadge = styled(BaseBadge)`
  background-color: ${({ theme: { colors } }) => colors.errorLighter} !important;
`;

/**
 * Default styles for BadgeText.
 */
export const BadgeText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.successLight};
  font-size: 1.4rem;
`;
