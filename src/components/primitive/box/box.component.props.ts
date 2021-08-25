import { ColProps, RowProps } from 'react-grid-system';
import { SpacingTypes } from '../../../utils';

export interface BoxComponentProps extends ColProps, RowProps {
  /**
    flex direction for the box
   */
  row?: boolean;

  /**
    Border radius facilitates curved borders
    */
  borderRadius?: number;

  /**
    Children components.
    */
  children?: React.ReactNode;

  /**
    Background color for the row. Useful in dev environment.
    */
  // color?: ColorType; // color type is not there

  /**
    Horizontally center align child components
    */
  hCenter?: boolean;

  /**
    Bottom align child components
    */
  bottom?: boolean;

  /**
    Vertically center align child components
    */
  vCenter?: boolean;

  /**
    Height of the container
    */
  height?: number | string;

  /**
    Width of the container
    */
  width?: number | string;

  /**
    Maximum height of the container
    */
  maxHeight?: number | string;

  /**
    Maximum width of the container
    */
  maxWidth?: number | string;

  /**
    Flex size
    */
  flex?: number;

  /**
    Flex wrap
    */
  wrap?: boolean;

  /**
    Hides the view when set to true
    */
  hidden?: boolean;

  /**
    Component margin top
    */
  marginTop?: SpacingTypes | number;

  /**
    Component margin bottom
    */
  marginBottom?: SpacingTypes | number;

  /**
    Component vertical margin
    */
  marginVertical?: SpacingTypes | number;

  /**
    Component horizontal margin
    */
  marginHorizontal?: SpacingTypes | number;

  /**
    Component right margin
    */
  marginRight?: SpacingTypes | number;

  /**
    Component left margin
    */
  marginLeft?: SpacingTypes | number;

  /**
    Component margin
    */
  margin?: SpacingTypes | number;

  /**
    Component padding
    */
  padding?: SpacingTypes | number;

  /**
    Component padding top
    */
  paddingTop?: SpacingTypes | number;

  /**
      Component padding bottom
      */
  paddingBottom?: SpacingTypes | number;

  /**
      Component vertical padding
      */
  paddingVertical?: SpacingTypes | number;

  /**
      Component horizontal padding
      */
  paddingHorizontal?: SpacingTypes | number;

  /**
      Component right padding
      */
  paddingRight?: SpacingTypes | number;

  /**
      Component left padding
      */
  paddingLeft?: SpacingTypes | number;

  /**
    Aligns content to right
    */
  rightAlign?: boolean;

  /**
    Aligns content to center
    */
  centerAlign?: boolean;

  /**
    Opacity pf the grid
    */
  opacity?: number;

  /**
    An optional style override useful for padding & margin.
    */
  style?: React.CSSProperties;

  /**
    justify content space-between for the box
   */
  spaceBetween?: boolean;
}
