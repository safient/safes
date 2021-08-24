import { Colors } from '../../../themes/colors';
import { Images } from '../../../themes/images';

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: Images;
  size?: number;
  color?: Colors;
}

export type { IconProps };
