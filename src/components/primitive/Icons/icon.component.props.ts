import { IconType } from './icons';
import { palette } from '../../../themes';

export const colors = {
  iconNormal: palette.grey.greyLight,
  iconDark: palette.grey.greyDefault,
};

export type ColorType = keyof typeof colors;
interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: IconType;
  size?: number;
  color?: ColorType;
}

export type { IconProps };
