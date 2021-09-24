import { Image } from '../../primitive';
import { safientLogo } from '../../../assets';
import { SideBar, LogoWrapper, NavLabelContainer, NavLabel } from './navbar.component.styles';

export const NavBar = () => {
  return (
    <SideBar>
      <LogoWrapper>
        <Image src={safientLogo} width={12.1} />
      </LogoWrapper>
      <NavLabelContainer>
        <NavLabel
          label={{ text: 'Home' }}
          icon={{ name: 'dashboard' }}
          onClick={() => console.log('clicked')}
          active={true}
        />
        <NavLabel label={{ text: 'Claims' }} icon={{ name: 'claim' }} onClick={() => console.log('clicked')} />
        <NavLabel label={{ text: 'Profile' }} icon={{ name: 'profile' }} onClick={() => console.log('clicked')} />
      </NavLabelContainer>
    </SideBar>
  );
};
