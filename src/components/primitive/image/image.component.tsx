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
      altText,
      name,
      theme: { images },
      ...rest
    } = props;

    let image = {};
    if (name) {
      image = { src: images[name] };
    } else {
      image = { src };
    }

    return <StyledImage {...image} alt={altText} {...rest} />;
  }
);
