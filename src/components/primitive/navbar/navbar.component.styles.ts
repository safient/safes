import styled from 'styled-components';
import { Navlink, Box } from '../../primitive';
import { BreakPoints } from './navbar.component.props';

/**
 * Styling for sidebar.
 */
export const SideBar = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 2rem;
  max-width: 34.3rem !important;
  height: 100vh;

  /**
 * Styles that are applied on medium screens.
 */
  @media screen and (max-width: ${BreakPoints.medium}) {
    display: none !important;
  }

  /**
 * Styles that are applied on medium screens and small screens.
 */
  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    display: none !important;
  }
`;

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled.div`
  display: flex;
  padding-left: 3rem;
  margin: 3rem 0 4rem 0 !important;

  /**
 * Styles that are applied on medium screens.
 */
  @media screen and (max-width: ${BreakPoints.medium}) {
    display: none !important;
  }

  /**
 * Styles that are applied on medium screens and small screens.
 */
  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    display: none !important;
  }
`;

export const NavLabelContainer = styled(Box)`
  padding: 1rem !important;
`;

/**
 * Styling for NavLabel.
 */
export const NavLabel = styled(Navlink)`
  display: flex;
  flex-direction: row !important;
  margin: 0.2rem !important;
`;
