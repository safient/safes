import { TextComponentProps } from 'components/primitive/text/text.component.props';
import { IconProps } from 'components/primitive/icon-svg/icon-svg.component.props';

export interface SafeCardComponentProps {
  /**
   * icon for the Card
   */
  icon: IconProps;

  /**
   * label for the Card
   */
  label: TextComponentProps;
}
