import { TextComponentProps } from 'components/primitive/text/text.component.props';
/**
 * Success Danger Warning
 */

import { BoxComponentProps } from '..';

export enum Variant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
}

export interface BadgeComponentProps extends BoxComponentProps {
  label: TextComponentProps;

  variant: keyof typeof Variant;
}
