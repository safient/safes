import { Image, Avatar } from '../../primitive';
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
        <Avatar src='https://pbs.twimg.com/profile_images/1428345850942480393/l84K68AT_400x400.png' size='small' />
      </BoxGroup>
    </TopBarContainer>
  );
};
