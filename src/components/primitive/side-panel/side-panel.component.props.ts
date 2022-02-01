export interface SidePanelComponentProps {
  show: boolean;

  onClose: () => void;

  togglePanel: () => void;

  children: React.ReactNode;
}
