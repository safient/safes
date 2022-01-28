import { TextComponentProps } from 'components/primitive/text/text.component.props';

/**
 * Based on the varient background color will be rendered.
 */
export enum Variant {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}

/**
 * we are using Box Component as a wrapper. so Text color won't be inherited based on varient.
 */
export enum TextColors {
  success = 'successLight',
  warning = 'warningLight',
  error = 'errorLight',
  info = 'infoLight',
}

export enum IconName {
  success = 'successAlert',
  warning = 'warningAlert',
  error = 'errorAlert',
  info = 'infoAlert',
}

/**
 * Props supported by Alert Component.
 */
export interface AlertComponentProps {
  label: TextComponentProps;
  icon?: boolean;
  variant: keyof typeof Variant;
  textColor?: keyof typeof TextColors;
}
