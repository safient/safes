import { Box, Text } from 'components/primitive';
import styled from 'styled-components';

export const SafeCardContainer = styled(Box)`
  flex: 0 0 auto !important;
  position: relative !important;
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 24.3rem !important;
  max-width: 33rem !important;
  border: 0.4rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
`;

export const SafeText = styled(Text)`
  margin-top: 2rem;
`;

export const MetaInfo = styled(Box)`
  position: absolute;
  bottom: 0;
  align-content: space-around;
  flex: 0 0 !important;
  width: 100%;
  height: 7.2rem;
`;
