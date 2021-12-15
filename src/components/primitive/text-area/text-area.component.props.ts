export interface TextAreaComponentProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label for the TextArea
   */
  label?: string;

  /**
   * Value of TextArea Field
   */
  value?: string | number;

  /**
   * Disables the TextArea Field
   */
  isDisabled?: boolean;

  /**
   * Sets the width to 100% if its true
   */
  wide?: boolean;

  /**
   * Error Message string
   */
  error?: string;
}
