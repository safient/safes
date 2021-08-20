import { palette } from '../../../themes';
import { ImageTypes } from '../../../themes/images';

const colors = {
  iconLight: palette.grey.light,
  iconDark: palette.grey.main,
};

export type ColorType = keyof typeof colors;
interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: ImageTypes;
  size?: number;
  color?: ColorType;
}

export type { IconProps };
