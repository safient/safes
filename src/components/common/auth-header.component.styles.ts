import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 2.5rem 14rem;
  height: 8rem;
`;

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const List = styled.li`
  list-style: none;
`;
