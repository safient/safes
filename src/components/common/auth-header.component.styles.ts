import styled from 'styled-components';
import { BreakPoints } from 'utils';

export const LogoWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${BreakPoints.small}) {
    align-items: center !important;
    justify-content: space-between !important;
    margin-left: -3rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 2.5rem 14rem;
  height: 8rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: ${BreakPoints.small}) {
    display: none;
  }
`;

export const List = styled.li`
  list-style: none;
`;
