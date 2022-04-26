import styled from 'styled-components';
import { Box } from 'components/primitive';

export const IconContainer = styled(Box)`
  cursor: pointer;
`;

export const DropDownContainer = styled.section`
  position: absolute;
  background: ${({ theme: { colors } }) => colors.white};
  margin-top: 6rem;
  min-width: 20rem;
  height: auto;
  z-index: 50;
  padding: 2rem;
  right: -10%;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
`;
