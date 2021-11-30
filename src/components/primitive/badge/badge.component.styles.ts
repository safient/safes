import styled from 'styled-components';
import { Box, Text } from '..';

export const BaseBadge = styled(Box)`
  height: 3.5rem;
  width: fit-content;
  padding: 1.2rem 0.6rem !important;
  min-width: 10.5rem !important;
  border-radius: 0.4rem;
  border: none;
  align-content: center !important;
`;

/**
 * Success Danger Warning
 */
export const SuccessBadge = styled(BaseBadge)`
  /* background-color: ${({ theme: { colors } }) => colors.primary} !important; */
  background-color: rgba(73, 179, 147, 0.1);
  color: #49b393 !important;
`;

export const DangerBadge = styled(BaseBadge)`
  background-color: rgba(255, 162, 136, 0.1);
`;

export const ButtonText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.white};
`;
