import { TextComponentProps } from 'components/primitive/text/text.component.props';

/**
 * Props that are supported by Loader.
 */
export interface LoaderComponentProps {
  label: TextComponentProps;
  spinner?: boolean;
  helperText?: string;
}
