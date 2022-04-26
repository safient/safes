import styled from 'styled-components';
import { Box } from '../box/box.component';

export const AccordionContainer = styled(Box)``;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.textLight};
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled(Box)`
  cursor: pointer;
`;
