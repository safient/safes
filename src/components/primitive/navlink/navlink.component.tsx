import React from 'react';
import styled from 'styled-components';
import { NavlinkComponentProps } from './navlink.component.props';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';
import { IconSvg } from '../icon-svg/icon-svg.component';
import { Link } from 'react-router-dom';

const NavlinkContainer = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Navlink: React.FunctionComponent<NavlinkComponentProps> = (props: NavlinkComponentProps) => {
  const { active, label, icon, onClick, path, ...rest } = props;

  return (
    // @ts-ignore - No overload matches this call
    <NavlinkContainer
      row
      hCenter
      margin='tiny'
      paddingHorizontal='small'
      paddingVertical='tiny'
      color={active ? 'navLinkActive' : 'white'}
      onClick={onClick}
      {...rest}
    >
      <IconSvg {...icon} />
      <Box marginLeft='tiny'>
        <StyledLink to={path}>
          <Text bold size='small' lineHeight={2.4} color='black' {...label} />
        </StyledLink>
      </Box>
    </NavlinkContainer>
  );
};
