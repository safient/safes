export interface ChipComponentProps {
  /**
   * label of the chip
   */
  label: string;

  /**
   * index of the chip
   */
  index: number;

  /**
   * method to remove the chip
   */
  onRemove: (index: number) => void;
}
