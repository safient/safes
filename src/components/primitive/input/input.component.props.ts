export interface InputComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Type of the Input
   */
  type?: string;

  /**
   * Label for the Input
   */
  label?: string;

  /**
   * Value of Input Field
   */
  value?: string | number;

  /**
   * Disables the Input Field
   */
  isDisabled?: boolean;

  /**
   * Sets the width to 100% if its true
   */
  wide?: boolean;

  /**
   * Error Message string
   */
  errorMsg?: string;

  error?: boolean;
}
