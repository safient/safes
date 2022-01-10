import { TextComponentProps } from 'components/primitive/text/text.component.props';
import { ImageComponentProps } from 'components/primitive/image/image.component.props';
import { Image } from 'themes';

/**
 * Props that are supported by Loader.
 */
export interface LoaderComponentProps extends ImageComponentProps {
  /**
   * Default text for loader.
   */
  label: TextComponentProps;

  /**
   * Shows spinner instead of Default loader gif.
   */
  spinner?: boolean;

  /**
   * Optional helper Text.
   */
  helperText?: TextComponentProps;

  /**
   * Name of the Icon
   */
  IconName?: Image;
}
