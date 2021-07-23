import { IconType } from './icons';

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: IconType;
  size?: number;
  color?: string;

  default?: any;
}

export type { IconProps };
