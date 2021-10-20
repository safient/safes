import styled from 'styled-components';
import { Box, Avatar } from '../../primitive';
import { BreakPoints } from 'utils';

/**
 * Styling for main container that holds TopBar.
 */
export const TopBarContainer = styled(Box)`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex-direction: row !important;
  height: 7rem;
  justify-content: space-between !important;
  padding-right: 4rem !important;
  width: 100% !important;

  @media screen and (min-width: ${BreakPoints.large}) {
    background-color: transparent;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    padding-right: 2rem !important;
  }
`;

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled(Box)`
  display: inline-block !important;
  margin-left: 2.2rem !important;

  @media screen and (min-width: ${BreakPoints.large}) {
    visibility: hidden !important;
  }
`;

/**
 * Styling for Notification.
 */
export const NotificationIcon = styled(Avatar)`
  width: 4rem;
`;

/**
 * Styling for BoxGroup container.
 */
export const BoxGroup = styled(Box)`
  gap: 0.8rem;
  margin: 0.2rem !important;
  &:nth-last-child() {
    padding: 0.8rem !important;
  }
`;
