import { IconProps } from './icon.component.props';
import { ReactSVG } from 'react-svg';
import { ICONS } from './icons';
import { SvgWrapper } from './icon.component.style';

export const Icon = ({ name, className, size = 14, color, ...rest }: IconProps) => (
  <SvgWrapper className={className} size={size} color={color} {...rest}>
    <ReactSVG
      src={ICONS[name]}
      beforeInjection={(svg: any) => {
        svg.setAttribute('width', `${size}px`);
        svg.setAttribute('height', `${size}px`);
      }}
    />
  </SvgWrapper>
);
