import React from 'react';
import { Color } from '../../../themes';

export enum Variant {
  /**
   * Large sized dark text, usually a large heading
   */
  title = 'title',

  /**
   * A grayish  medium sized bold header
   */
  contentHeader = 'contentHeader',

  /**
   * Common medium sized text used in description and other contents.
   */
  content = 'content',

  /**
   * Renders a small gray text
   */
  small = 'small',
}

/**
 * Font Sizes- base size is 10px - so 1rem=10px
 */
export enum FontSize {
  tiny = 1.2,
  small = 1.6,
  medium = 2.0,
  large = 2.6,
}

/**
 * Font weights
 */
export enum FontWeight {
  semiBold = 500,
  bold = 600,
}

/**
 * Text Alignment properties
 */
export enum TextAlign {
  left,
  center,
  right,
}

export interface TextComponentProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Bolder text
   */
  bold?: boolean;

  /**
   * Less bolder text
   */
  bold500?: boolean;

  /**
   * More bolder text
   */
  bold600?: boolean;

  /**
   * Sets font weight to normal
   */
  noBold?: boolean;

  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * Text color.
   */

  color?: Color;

  /**
   * Center align text
   */
  center?: boolean;

  /**
   * left align text
   */

  left?: boolean;

  /**
   * right align text
   */

  right?: boolean;

  /**
   * capitalize  text
   */
  capitalize?: boolean;
  /**
   * Grays out the text to make it look disabled and restricts onPress operation
   */
  disabled?: boolean;

  /**
   * Line height.
   */
  lineHeight?: number;

  /**
   * Text which is looked up via i18n.
   */
  tx?: string;

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * When a text is displayed in a row next to an item, this prop
   * can be used to add some space before text
   */
  paddingLeft?: number;

  /**
   * When a text is displayed in a row next to an item, this prop
   * can be used to add some space after text
   */
  paddingRight?: number;

  /**
   * One of the different types of text presets.
   */
  preset?: string;

  /**
   * Font size from the predefined set of sizes or an arbitrary number
   */
  size?: keyof typeof FontSize | number;

  /**
   * Transform text to UPPER CASE
   */
  upperCase?: boolean;

  /**
   * Transform text to lower case
   */
  lowerCase?: boolean;

  /**
   * determines the differnt text variants.
   */

  variant?: keyof typeof Variant;

  /**
   * sets the font weight
   */

  weight?: keyof typeof FontWeight;
}
