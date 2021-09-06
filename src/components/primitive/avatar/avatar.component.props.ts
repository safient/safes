import { ImageComponentProps } from '../image/image.component.props';

export enum Variant {
  /**
   * Small sized avatar
   */
  small = 'small',

  /**
   * Medium sized avatar.
   */
  medium = 'medium',

  /**
   * Large sized avatar.
   */
  large = 'lage',
}

/**
 * Different avatar sized, used in custom styling part
 */
export enum AvatarSize {
  tiny = 1.5,
  small = 3,
  medium = 4,
  large = 6,
  xLarge = 10,
}

export interface AvatarComponentProps extends ImageComponentProps {
  /**
   * Avatar sizes
   */
  size?: keyof typeof AvatarSize;

  /**
   * sets rounded border.
   */
  rounded?: boolean;

  /**
    Border radius facilitates curved borders
    */
  borderRadius?: number;

  /**
   * sets the different variants.
   */
  variant?: keyof typeof Variant;

  /**
   * sets squared avatar.
   */
  flat?: boolean;
}
