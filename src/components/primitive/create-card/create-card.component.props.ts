import { TextComponentProps } from './../text/text.component.props';
import { IconProps } from './../icon-svg/icon-svg.component.props';

export interface CreateCardComponentProps {
  /**
   * icon for the Card
   */
  icon: IconProps;

  /**
   * label for the Card
   */
  label: TextComponentProps;
}
