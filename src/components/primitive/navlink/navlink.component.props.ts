import { BoxComponentProps } from '../box/box.component.props';
import { IconProps } from '../icon-svg/icon-svg.component.props';
import { TextProps } from '../text/text.component.props';

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
  label: TextProps;
}
