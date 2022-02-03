import React from 'react';
import ReactTooltip from 'react-tooltip';
import { IconSvg, Text } from '..';
import { TooltipComponentProps } from './tooltip.component.props';

export const Tooltip: React.FunctionComponent<TooltipComponentProps> = (props: TooltipComponentProps) => {
  const { icon, text } = props;

  return (
    <>
      <Text data-tip={text} style={{ width: 'fit-content' }}>
        {icon ? <IconSvg {...icon} /> : <IconSvg color='primary' name='info' />}
      </Text>
      <ReactTooltip />
    </>
  );
};
