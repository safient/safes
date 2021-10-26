import styled from 'styled-components';
import { Box, Avatar } from 'components/primitive';
import { BreakPoints } from 'utils';

/**
 * Styling for main container that holds TopBar.
 */
export const TopBarContainer = styled(Box)`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex-direction: row !important;
  flex-grow: 0 !important;
  height: 7rem !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-top: 1rem !important;
  padding-bottom: 2rem !important;
  padding-right: 4rem !important;
  width: 100% !important;
  z-index: 10;

  @media screen and (min-width: ${BreakPoints.large}) {
    background-color: transparent;
    padding: 1rem !important;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    padding-right: 2rem !important;
    position: fixed !important;
    top: 0px;
    left: 0px;
    right: 0px;
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
  margin-right: 0.7rem !important;
  &:nth-last-child() {
    padding: 0.8rem !important;
  }
`;
