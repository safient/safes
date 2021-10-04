import styled from 'styled-components';
import { Box, Navlink } from '../../primitive';
import { BreakPoints } from '../../../utils';

/**
 * Styling for SideBarWrapper.
 */
export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.white};

  @media screen and (max-width: ${BreakPoints.medium}) {
    flex-direction: row;
    height: 7rem;
    width: 100vw;
    position: fixed !important;
    bottom: 0;
  }
`;

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled.div`
  display: flex;
  padding-left: 3rem;
  margin: 3rem 0 4rem 0 !important;

  @media screen and (max-width: ${BreakPoints.medium}) {
    display: none !important;
  }

  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    display: none !important;
  }
`;

/**
 * Styling for NavLabelContainer.
 */
export const NavLabelContainer = styled(Box)`
  padding: 1rem !important;

  @media screen and (max-width: ${BreakPoints.medium}) {
    padding: 0 !important;
    display: flex;
    flex-direction: row !important;
    justify-content: space-evenly;
  }
`;

/**
 * Styling for NavLabel.
 */
export const NavLabel = styled(Navlink)`
  display: flex;
  flex-direction: row !important;
  margin: 0.2rem !important;
`;
