import styled from 'styled-components';
import { Box } from 'components/primitive';

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.textLight};
`;

export const MenuContainer = styled(Box)`
  position: relative !important;
`;

export const NameContainer = styled.section`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`;

export const NavLabelContainer = styled(Box)`
  margin-top: 3rem !important;
  gap: 1rem;
  cursor: pointer;
`;
