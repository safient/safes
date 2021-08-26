import { Color } from '../../../themes';
import { Image } from '../../../themes';

export const sizes = {
  small: 14,
  medium: 18,
  large: 32,
  xLarge: 40,
};
type Size = keyof typeof sizes;

interface IconProps {
  name: Image;
  size?: Size;
  color?: Color;
}

export type { IconProps, Size };
