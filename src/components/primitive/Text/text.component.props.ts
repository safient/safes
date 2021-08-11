import React from 'react';
import { ColorTypes } from '../../../themes/colors';

export enum TextPresets {
  /**
   * A greyish  medium sized bold header text
   */
  CONTENT_HEADER = 'contentHeader',

  /**
   * A greyish  medium sized text
   */
  CONTENT = 'content',

  /**
   * Common medium sized description text
   */
  DESCRIPTION = 'description',

  /**
   * Large sized dark text
   */
  TITLE = 'title',

  /**
   * Used to show small light colored info messages
   */
  MESSAGE = 'message',

  /**
   * Renders a small gray text
   */
  SMALL = 'small',
}

/**
 * base size is 10px - so 1rem=10px
 */
export const FontSizes = {
  tiny: 1.2,
  small: 1.6,
  medium: 2.0,
  large: 2.6,
};

type Size = keyof typeof FontSizes;

/**
 * Font weights
 */

export const FontWeight = {
  semiBold: 500,
  bold: 600,
};

type Weight = keyof typeof FontWeight;

export interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Adds text to the end of the current text
   */
  append?: TextProps;

  /**
   * Bolder text
   */
  bold?: boolean;

  /**
   * Less bolder text
   */
  bold500?: boolean;

  /**
   * Less bolder text
   */
  bold200?: boolean;

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

  color?: string;

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
   * An optional style override useful for padding & margin.
   */
  // style?: TextStyle | TextStyle[];
  style?: any;

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
   * Adds text to the beginning of the current text
   */
  prepend?: TextProps;

  /**
   * While appending or prepending a text, a spacing is automatically added.
   * If noSpace prop is true, then the space will not be added.
   */
  noSpace?: boolean;

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets;

  /**
   * Font size from the predefined set of sizes or an arbitrary number
   */
  size?: Size | number;

  /**
   * Transform text to UPPER CASE
   */
  upperCase?: boolean;

  /**
   * Transform text to lower case
   */
  lowerCase?: boolean;
  colors?: ColorTypes | any;
  variant?: string;
  weight?: Weight;
}
