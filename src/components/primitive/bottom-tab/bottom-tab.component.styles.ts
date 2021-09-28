import styled from 'styled-components';
import { BreakPoints } from './../navbar/navbar.component.props';
import { Box, Navlink } from '../../primitive';

/**
 * Styles for Bottom-navigation displayed on smaller devices.
 */
export const BottomNavigation = styled(Box)`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.white};
  position: fixed;
  bottom: 0;
  width: 100vw;
  justify-content: space-evenly !important;

  /**
 * Media Queries applied on medium screens.
 */
  @media screen and (max-width: ${BreakPoints.medium}) {
    flex-direction: row;
    height: 7rem;
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
