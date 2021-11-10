export interface DropDwonProps {
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

export interface OptionsProps {
  /**
   * Value of selected item
   */
  value: string | number;
}
