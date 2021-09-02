import React from 'react';
import styled, { withTheme } from 'styled-components';
import { IStyledTheme } from '../../../themes/styled-components';
import { NavlinkComponentProps } from './navlink.component.props';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';
import { IconSvg } from '../icon-svg/icon-svg.component';

const NavlinkContainer = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;

export const Navlink: React.FunctionComponent<NavlinkComponentProps> = (
  props: NavlinkComponentProps
) => {
  const { active, label, icon, onClick, ...rest } = props;

  return (
    // @ts-ignore - No overload matches this call
    <NavlinkContainer
      row
      hCenter
      margin='tiny'
      paddingHorizontal='small'
      paddingVertical='tiny'
      color={active ? 'shadow' : 'white'}
      onClick={onClick}
      {...rest}>
      <IconSvg {...icon} />
      <Box marginLeft='tiny'>
        <Text bold size='small' lineHeight={2.4} color='black' {...label} />
      </Box>
    </NavlinkContainer>
  );
};
