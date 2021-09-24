import styled from 'styled-components';
import { Navlink, Box } from '../../primitive';

export const SideBar = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  padding: 2rem;
  max-width: 343px !important;
  height: 100vh;
  @media screen and (max-width: 768px) {
    display: none !important;
  }
  @media screen and (max-width: 768px) and (max-width: 480px) {
    display: none !important;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  padding-left: 3rem;
  margin: 3rem 0 4rem 0 !important;

  @media screen and (max-width: 768px) {
    display: none !important;
  }
  @media screen and (max-width: 768px) and (max-width: 480px) {
    display: none !important;
  }
`;

export const NavLabelContainer = styled(Box)`
  padding: 1rem !important;
`;

export const NavLabel = styled(Navlink)`
  display: flex;
  flex-direction: row !important;
  margin: 0.2rem !important;
`;
