import { IconType } from './svgIcons';
import { palette } from '../../../themes';

export const colors = {
  iconLight: palette.grey.light,
  iconDark: palette.grey.main,
};

export type ColorType = keyof typeof colors;
interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: IconType;
  size?: number;
  color?: ColorType;
}

export type { IconProps };
