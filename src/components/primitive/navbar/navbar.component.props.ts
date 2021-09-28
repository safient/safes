import { IconProps } from './../icon-svg/icon-svg.component.props';
import { TextComponentProps } from './../text/text.component.props';

/**
 * Different screen sizes used across the screens.
 */
export enum BreakPoints {
  small = '480px',
  medium = '768px',
  large = '1040px',
  xLarge = '1200px',
}

/**
 * Interface for Navbar items.
 */
export interface NavbarItem {
  label: TextComponentProps;
  icon: IconProps;
  path: string;
  onClick: () => void;
}
