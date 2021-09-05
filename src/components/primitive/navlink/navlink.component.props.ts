import { BoxComponentProps } from '../box/box.component.props';
import { IconProps } from '../icon-svg/icon-svg.component.props';
import { TextComponentProps } from '../text/text.component.props';

export interface NavlinkComponentProps extends BoxComponentProps {
  /**
   * If navlink is active
   */
  active?: boolean;

  /**
   * icon for the link
   */
  icon: IconProps;

  /**
   * label for the navlink
   */
  label: TextComponentProps;

  /**
   * function will be triggered when the link is clicked
   */
  onClick: () => void;
}
