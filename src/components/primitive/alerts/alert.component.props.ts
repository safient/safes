import { IconProps } from 'components/primitive';
import { TextComponentProps } from 'components/primitive/text/text.component.props';

/**
 * Based on the varient background color will be rendered.
 */
export enum Variant {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

/**
 * we are using Box Component as a wrapper. so Text color won't be inherited based on varient.
 */
export enum TextColors {
  success = 'successLight',
  warning = 'warningLight',
  error = 'error',
}

/**
 * Props supported by Alert Component.
 */
export interface AlertComponentProps {
  label: TextComponentProps;
  icon?: IconProps;
  variant: keyof typeof Variant;
  textColor?: keyof typeof TextColors;
}
