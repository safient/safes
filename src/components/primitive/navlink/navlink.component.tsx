import React from 'react';
import { withTheme } from 'styled-components';
import { IStyledTheme } from '../../../themes/styled-components';
import { NavlinkComponentProps } from './navlink.component.props';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';
import { IconSvg } from '../icon-svg/icon-svg.component';

// @ts-ignore
export const Navlink: React.FunctionComponent<NavlinkComponentProps> = withTheme(
  (props: NavlinkComponentProps & IStyledTheme) => {
    const { active, label, icon, ...rest } = props;

    return (
      <Box
        row
        hCenter
        margin='tiny'
        paddingHorizontal='small'
        paddingVertical='tiny'
        color={active ? 'shadow' : 'white'}
        {...rest}>
        <IconSvg {...icon} />
        <Box marginLeft='tiny'>
          <Text bold size='small' lineHeight={2.4} color='black' {...label} />
        </Box>
      </Box>
    );
  }
);
