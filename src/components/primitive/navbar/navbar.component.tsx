import { useHistory } from 'react-router-dom';
import { Image } from '../../primitive';
import { safientLogo } from '../../../assets';
import { navItems } from './navbar';
import { SideBarWrapper, LogoWrapper, NavLabelContainer, NavLabel } from './navbar.component.styles';

export const NavBar: React.FC = () => {
  const history = useHistory();

  return (
    <SideBarWrapper>
      <LogoWrapper>
        <Image src={safientLogo} width={12.1} />
      </LogoWrapper>
      <NavLabelContainer>
        {navItems.map((item, index) => {
          return <NavLabel key={index} active={item.path === history.location.pathname} {...item} />;
        })}
      </NavLabelContainer>
    </SideBarWrapper>
  );
};
