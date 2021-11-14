import { BoxComponentProps } from '../box/box.component.props';
import { IconProps } from '../icon-svg/icon-svg.component.props';
import { TextComponentProps } from '../text/text.component.props';

export enum Variant {
  /**
   * Medium sized Button
   */
  primary = 'primary',

  /**
   * Small sized Button.
   */
  small = 'small',

  /**
   * Outlined transparant Button.
   */
  ghost = 'ghost',
}

export interface ButtonComponentProps extends BoxComponentProps {
  /**
   * label for Text Component
   */
  label: TextComponentProps;

  /**
   * option to use diffent variants. Primary is the default variant.
   */
  variant: keyof typeof Variant;

  /**
   * sets the outlined Button.
   */
  outlined?: boolean;

  /**
   * Allows to use Icons with Button.
   */
  icon?: IconProps;

  /**
   * To Support loading indicator on Buttons.
   */
  loading?: boolean;

  /**
   * function will be triggered when the Button is clicked
   */
  onClick: () => void;
}
