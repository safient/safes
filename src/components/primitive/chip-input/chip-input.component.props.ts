export interface ChipInputComponentProps {
  /**
   * array of seed phases
   */
  seedPhases: string[];

  /**
   * method to change the seed phases
   */
  setSeedPhases: (seedPhases: string[]) => void;
}
