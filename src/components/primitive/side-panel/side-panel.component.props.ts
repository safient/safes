export interface SidePanelComponentProps {
  /**
   * determine if the panel should show
   */
  show: boolean;

  /**
   * close the panel
   */
  onClose: () => void;

  /**
   * function to close if open and vice versa
   */
  togglePanel: () => void;

  /**
   * contens of the panel
   */
  children: React.ReactNode;
}
