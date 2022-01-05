import { TooltipProps } from "react-tooltip";
import { IconProps } from "../icon-svg/icon-svg.component.props";
import { TextComponentProps } from "../text/text.component.props";

export interface TooltipComponentProps extends TooltipProps {
  /**
   * Icon (optional)
   */
  icon?: IconProps;

  /**
   * Text to be show
   */
  text: string;
}
