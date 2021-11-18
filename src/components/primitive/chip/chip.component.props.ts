import { SeedPhrase } from "models/seed-phrase";

export interface ChipComponentProps {
  /**
   * label of the chip
   */
  // label: string;

  /**
   * index of the chip
   */
  index: number;
  phrase: SeedPhrase

  /**
   * method to remove the chip
   */
  onRemove: (index: number) => void;
}
