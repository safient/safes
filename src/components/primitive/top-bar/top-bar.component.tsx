import { Image, Avatar } from 'components/primitive';
import { TopBarContainer, LogoWrapper, BoxGroup, NotificationIcon } from './top-bar.component.styles';
import { safientLogo } from 'assets';

export const TopBar = () => {
  return (
    <TopBarContainer vCenter hCenter>
      <LogoWrapper hCenter vCenter>
        <Image src={safientLogo} width={12.1} />
      </LogoWrapper>
      <BoxGroup row>
        <NotificationIcon name='notification' size='small' />
        <Avatar name='safientAvatar' size='small' />
      </BoxGroup>
    </TopBarContainer>
  );
};
