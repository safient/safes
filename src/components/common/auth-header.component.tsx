import { Button, Text, Image } from 'components/primitive';
import { safientLogo } from 'assets';
import { NavContainer, LogoWrapper, StyledNav, List } from './auth-header.component.styles';

export const Header = () => {
  return (
    <NavContainer>
      <LogoWrapper>
        <Image src={safientLogo} width={12.1} />
      </LogoWrapper>

      <StyledNav>
        <List>
          <Text variant='small'>Don't know what Safient does?</Text>
        </List>
        <List>
          <Button
            variant='ghost'
            label={{ text: 'Know more', color: 'textLight' }}
            onClick={() => window.location.href = "https://docs.safient.io"}
          />
        </List>
      </StyledNav>
    </NavContainer>
  );
};
