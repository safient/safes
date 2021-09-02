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
    const {
      theme: { colors },
      active,
      label,
      icon,
      ...rest
    } = props;

    return (
      <Box
        row
        hCenter
        paddingHorizontal='small'
        paddingVertical='tiny'
        color={active ? 'black' : 'error'}>
        <IconSvg {...icon} />
        <Text bold color={colors.black}>
          Dashboard
        </Text>
      </Box>
    );
  }
);
