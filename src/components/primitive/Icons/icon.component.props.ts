import { IconType } from './icons';

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  icon: IconType;
  size?: number;
  color?: string;

  default?: any;
}

export type { IconProps };
