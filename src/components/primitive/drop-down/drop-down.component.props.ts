export interface DropDownComponentProps {
  /**
   * Label for the Dropsdown
   */
  label?: string;

  /**
   * Value of selected item
   */
  value: string | number;

  /**
   * Sets the width to 100% if its true
   */
  wide?: boolean;

  /**
   * Children Component
   */
  children?: React.ReactNode;

  /**
   * Onchange Handler
   */
  onChange: any;
}

export interface DropDownOptionProps {
  /**
   * Value of selected item
   */
  value: string | number;

  /**
   * Children Component
   */
  children?: React.ReactNode;
}
