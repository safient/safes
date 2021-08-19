import { IconProps } from './svgIcon.component.props';
import { ReactSVG } from 'react-svg';
import { ICONS } from './svgIcons';
import { SvgWrapper } from './svgIcon.component.style';

export const SvgIcon = ({ name, className, size = 32, color, ...rest }: IconProps) => (
  <SvgWrapper className={className} size={size} color={color} {...rest}>
    <ReactSVG
      src={ICONS[name]}
      beforeInjection={(svg) => {
        svg.setAttribute('width', `${size}px`);
        svg.setAttribute('height', `${size}px`);
      }}
    />
  </SvgWrapper>
);
