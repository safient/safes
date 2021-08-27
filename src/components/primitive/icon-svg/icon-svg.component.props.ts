import { Color, Image } from '../../../themes';

/**
 * Different Sizes that are supported by Icon Component.
 **/
export enum Size {
  small = 14,
  medium = 18,
  large = 32,
  xLarge = 40,
}

export interface IconProps {
  /**
   * Name of the SVG icon that is available in the theme.
   **/
  name: Image;

  /**
   * Different sizes supported by the Icon Component.
   **/
  size?: keyof typeof Size;

  /**
   * Colors that are available in the theme.
   **/
  color?: Color;
}
