import styled from 'styled-components';
import { Box, Button } from 'components/primitive';

export const StyledRow = styled(Box)`
  gap: 1.2rem;
  margin-bottom: 2.4rem !important;

  &:last-child {
    margin-bottom: 0 !important;
  }
`;

export const DangerZoneButton = styled(Button)`
  width: 17rem;
  height: 5rem;
  border: none !important;
  padding-left: 2rem !important;
  background: ${({ theme: { colors } }) => colors.applicationBackground} !important;
`;
