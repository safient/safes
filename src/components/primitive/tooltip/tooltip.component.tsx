import React from "react";
import ReactTooltip from "react-tooltip";
import { IconSvg } from "..";
import { TooltipComponentProps } from "./tooltip.component.props";

const Tooltip: React.FunctionComponent<TooltipComponentProps> = (
  props: TooltipComponentProps
) => {
  const {
    icon,
    text,
    ...rest
  } = props;

  return (
    <>
      <p data-tip="hello world">
        {icon ? <IconSvg {...icon} /> : <IconSvg color="primary" name="info" />}
      </p>
      <ReactTooltip {...rest}/>
    </>
  );
};

export default Tooltip;
