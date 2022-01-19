export interface DropDownOptions {
  /**
   * Used as Key while mapping through the lists
   */
  id?: string | number;

  /**
   * Fallback option used when there is no ID
   */
  index?: string | number;

  /**
   * Used to get the selected value
   */
  value: string;

  /**
   * Options in the DropDown
   */
  option: string;
}

export interface DropDownComponentProps {
  /**
   * Label for the Dropdown
   */
  label?: string;

  /**
   * Value of selected item
   */
  value?: string | number;

  /**
   * Options for Dropdown
   */
  options?: DropDownOptions[];

  /**
   * Sets the width to 100% if its true
   */
  wide?: boolean;

  /**
   * Error Message string
   */
  errorMsg?: string;

  /**
   * Flag that activates during form validation
   */
  error?: boolean;

  /**
   * Children Component
   */
  children?: React.ReactNode;

  /**
   * onChange Handler
   */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
