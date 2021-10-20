import { Box, IconSvg, Image } from '..';
import styled from 'styled-components';
import { Avatar } from '../avatar/avatar.component';
import { safientLogo } from '../../../assets';
import { BreakPoints } from '../../../utils';

export const TopBarContainer = styled(Box)`
  background-color: white;
  flex-direction: row !important;
  height: 70px;
  justify-content: space-between !important;
  padding-right: 40px !important;
  width: 100% !important;

  @media screen and (min-width: ${BreakPoints.large}) {
    background-color: transparent;
  }
  @media screen and (max-width: ${BreakPoints.small}) {
    padding-right: 20px !important;
  }
`;

export const NotificationIcon = styled(Avatar)`
  height: 30px !important;
  width: 30px !important;
`;

/**
 * Styling for Logo container.
 */
export const LogoWrapper = styled(Box)`
  margin-left: 20px !important;

  @media screen and (min-width: ${BreakPoints.large}) {
    visibility: hidden !important;
  }
`;

export const BoxGroup = styled(Box)`
  margin: 2px !important;
`;

export const TopBar = () => {
  return (
    <TopBarContainer vCenter hCenter>
      <LogoWrapper hCenter vCenter>
        <Image src={safientLogo} width={12.1} />
      </LogoWrapper>
      <BoxGroup row>
        <NotificationIcon name='notification' size='medium' />
        <Avatar src='https://pbs.twimg.com/profile_images/1428345850942480393/l84K68AT_400x400.png' size='small' />
      </BoxGroup>
    </TopBarContainer>
  );
};
