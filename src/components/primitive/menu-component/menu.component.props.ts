export interface MenuComponentProps {
  /**
   * to determine if modal should show
   */
  show: boolean;

  /**
   * method to close the modal
   */
  onClose?: () => void;

  /**
   * should modal close if background is clicked
   */
  noClose?: boolean;
}
