import { SeedPharsesList } from "models/seed-phrase-list";

export interface ChipInputComponentProps {
  /**
   * array of seed phases
   */
  seedPhrases: SeedPharsesList;

  /**
   * method to change the seed phases
   */
  setSeedPhrases: (seedPhases: SeedPharsesList) => void;
}
