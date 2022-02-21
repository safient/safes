import { TextComponentProps } from 'components/primitive/text/text.component.props';
import { BoxComponentProps } from 'components/primitive/box/box.component.props';

/**
 * Different Variants of Badge Component
 */
export enum Variant {
  success = 'success',
  danger = 'danger',
}

export interface BadgeComponentProps extends BoxComponentProps {
  /**
   * label for Text Component
   */
  label: TextComponentProps;

  /**
   * option to use diffent variants. Success is the default variant.
   */
  variant: keyof typeof Variant;
}
