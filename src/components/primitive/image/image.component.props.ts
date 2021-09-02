import { Image } from '../../../themes';
interface ImageComponentProps {
  /**
   * Source for the image
   */
  src?: string;

  /**
   * Fallback text if image fails to load.
   */
  altText?: string;

  /**
   * Option to pass local images.
   */
  name?: Image;

  /**
   * Sets the width of imaage.
   */
  width?: number;

  /**
   * Sets the width of the image.
   */
  height?: number;

  /**
   * sets rounded border.
   */
  rounded?: boolean;

  /**
   * sets the border radius.
   */
  borderRadius?: number;
}

export type { ImageComponentProps };
