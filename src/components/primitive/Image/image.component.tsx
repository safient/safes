import { StyledImage } from './image.component.style';
import { ImageComponentProps } from './image.component.props';

export const Image: React.FC<ImageComponentProps> = ({ src, altText, className, width, height }) => {
  return <StyledImage src={src} alt={altText} className={className} width={width} height={height} />;
};
