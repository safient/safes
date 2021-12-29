export interface ToggleSwitchComponentProps {
  /**
   *  Mandatory props to identify the switch.
   */
  toggleID: string;

  /**
   * used to toggle the switch.
   */

  checked: boolean;

  /**
   * onChange Handler.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
