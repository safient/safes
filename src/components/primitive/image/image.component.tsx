import styled, { withTheme } from 'styled-components';
import { ImageComponentProps } from './image.component.props';
import { IStyledTheme } from '../../../themes/styled-components';

export const StyledImage = styled.img<ImageComponentProps>`
  width: ${({ width }) => (width ? `${width}rem` : '100%')};
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};
  border-radius: ${({ rounded }) => (rounded ? '50%' : '')};
  border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}rem` : 'auto')};
`;

export const Image: React.FunctionComponent<ImageComponentProps> = withTheme(
  (props: ImageComponentProps & IStyledTheme) => {
    const {
      src,
      alt,
      name,
      theme: { images },
      ...rest
    } = props;

    const url = name ? images[name] : src;

    return <StyledImage src={url} alt={alt} {...rest} />;
  }
);
