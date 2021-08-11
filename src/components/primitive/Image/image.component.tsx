import { StyledImage } from './image.component.style';
import { ImageComponentProps } from './image.component.props';

export const Image: React.FC<ImageComponentProps> = ({ id, src, altText, className, width, height }) => {
  return <StyledImage id={id} src={src} alt={altText} className={className} width={width} height={height} />;
};
