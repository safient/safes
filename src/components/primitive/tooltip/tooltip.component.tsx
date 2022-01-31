import React from 'react';
import ReactTooltip from 'react-tooltip';
import { IconSvg, Text } from '..';
import { TooltipComponentProps } from './tooltip.component.props';

const Tooltip: React.FunctionComponent<TooltipComponentProps> = (props: TooltipComponentProps) => {
  const { icon, text, ...rest } = props;

  return (
    <>
      <Text data-tip={text} style={{ width: 'fit-content' }}>
        {icon ? <IconSvg {...icon} /> : <IconSvg color='primary' name='info' />}
      </Text>
      <ReactTooltip />
    </>
  );
};

export default Tooltip;
// {icon ? <IconSvg {...icon} /> : <IconSvg color='primary' name='info' />}
{
  /* <p data-tip='hello world'>Tooltip</p>
      <ReactTooltip /> */
}
