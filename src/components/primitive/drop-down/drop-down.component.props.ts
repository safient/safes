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
   * label in dropdown object.
   */
  label: string;
}

export interface DropDownComponentProps {
  /**
   * Label for the Dropdown.
   */
  label?: string;

  /**
   * Value of selected item.
   */
  value?: string | number | null;

  /**
   * Options for Dropdown - https://react-select.com/typescript#unknown
   */
  options?: DropDownOptions[] | unknown;

  /**
   * Sets the width to 100% if its true.
   */
  wide?: boolean;

  /**
   * Error Message string.
   */
  error?: string;

  /**
   * Children Component.
   */
  children?: React.ReactNode;

  /**
   * Place Holer Text.
   */

  placeholder: string;

  /**
   * Tooltip Text.
   */
  info?: string;

  /**
   * onChange Handler.
   */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
