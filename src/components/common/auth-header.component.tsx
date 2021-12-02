import styled from 'styled-components';
import { Button, Text, Image } from 'components/primitive';
import { safientLogo } from 'assets';
import { BreakPoints } from 'utils';

export const LogoWrapper = styled.div`
  display: flex;

  @media screen and (max-width: ${BreakPoints.medium}) {
    /* display: none !important; */
  }

  @media screen and (max-width: ${BreakPoints.medium}) and (max-width: ${BreakPoints.small}) {
    /* display: none !important; */
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 25px 140px;
  height: 80px;
`;

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const List = styled.li`
  list-style: none;
`;

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
            onClick={() => console.log('clicked')}
          />
        </List>
      </StyledNav>
    </NavContainer>
  );
};
