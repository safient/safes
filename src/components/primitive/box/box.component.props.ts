import { ColProps, RowProps } from 'react-grid-system';
import { SpacingTypes } from '../../../utils';
import { ColorType } from '../Icons/icon.component.props';

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
  color?: ColorType;

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
  marginTop?: SpacingTypes;

  /**
    Component margin bottom
    */
  marginBottom?: SpacingTypes;

  /**
    Component vertical margin
    */
  marginVertical?: SpacingTypes;

  /**
    Component horizontal margin
    */
  marginHorizontal?: SpacingTypes;

  /**
    Component right margin
    */
  marginRight?: SpacingTypes;

  /**
    Component left margin
    */
  marginLeft?: SpacingTypes;

  /**
    Component margin
    */
  margin?: SpacingTypes;

  /**
    Component padding
    */
  padding?: SpacingTypes;

  /**
    Component padding top
    */
  paddingTop?: SpacingTypes;

  /**
      Component padding bottom
      */
  paddingBottom?: SpacingTypes;

  /**
      Component vertical padding
      */
  paddingVertical?: SpacingTypes;

  /**
      Component horizontal padding
      */
  paddingHorizontal?: SpacingTypes;

  /**
      Component right padding
      */
  paddingRight?: SpacingTypes;

  /**
      Component left padding
      */
  paddingLeft?: SpacingTypes;

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
  style?: any;

  /**
    justify content space-between for the box
   */
  spaceBetween?: boolean;
}
