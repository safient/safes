import { Id } from "models";
import { SeedPhrase } from "models/seed-phrase";

export interface ChipComponentProps {
  /**
   * index of the chip
   */
  index: number;

  /**
   * id of the chip
   */
  id: Id;

  /**
   * chip phrase
   */
  phrase: SeedPhrase

  /**
   * method to remove the chip
   */
  onRemove: (id: Id) => void;
}
