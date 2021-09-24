import styled from 'styled-components';
import { Box, Navlink } from '..';

/**
 * Styles for Bottom-navigation displayed on smaller devices.
 */
export const BottomNavigation = styled(Box)`
  justify-content: space-evenly !important;
  flex: 1;
  background-color: white;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: 70px;
    width: 100vw;
    position: fixed;
    bottom: 0;
    justify-content: space-evenly;
  }
`;

/**
 * Styles for Navigation Label.
 */
export const NavLabel = styled(Navlink)`
  display: flex;
  flex-direction: row !important;
  margin: 0.2rem !important;
`;
