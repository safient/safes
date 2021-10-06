import { IconProps } from '../icon-svg/icon-svg.component.props';
import { TextComponentProps } from '../text/text.component.props';

/**
 * Interface for Navbar items.
 */
export interface NavbarItem {
  label: TextComponentProps;
  icon: IconProps;
  path: string;
  onClick: () => void;
}
