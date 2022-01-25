import { IconProps } from 'components/primitive';
import { TextComponentProps } from 'components/primitive/text/text.component.props';

export enum Variant {
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export enum TextColors {
  primary = 'primary',
  success = 'successLight',
  warning = 'warningLight',
  error = 'error',
}

export interface AlertComponentProps {
  label: TextComponentProps;
  icon?: IconProps;
  variant: keyof typeof Variant;
  textColor?: keyof typeof TextColors;
}
