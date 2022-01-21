import { TextComponentProps } from 'components/primitive/text/text.component.props';

/**
 * Different Variants of Badge Component
 */
export enum Variant {
  success = 'success',
  danger = 'danger',
}

export interface LabelComponentProps {
  /**
   * label for Text Component
   */
  labelText: TextComponentProps;

  /**
   * option to use diffent variants. Success is the default variant.
   */
  variant: keyof typeof Variant;
}
