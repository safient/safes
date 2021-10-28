export interface ChipInputComponentProps {
  /**
   * array of seed phases
   */
  seedPhrases: string[];

  /**
   * method to change the seed phases
   */
  setSeedPhrases: (seedPhases: string[]) => void;
}
