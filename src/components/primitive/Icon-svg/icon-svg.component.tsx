import { IconProps } from './icon-svg.component.props';
import { ReactSVG } from 'react-svg';
import { SvgWrapper } from './icon-svg.component.style';
import { withTheme } from 'styled-components';
import { IStyledTheme } from '../../../themes/styled-components';

export const IconSvg: React.FunctionComponent<IconProps> = withTheme((props: IconProps & IStyledTheme) => {
  const {
    size,
    color = 'textDark',
    name,
    theme: { images, colors },
    ...rest
  } = props;
  const iconColor = colors[color];

  return (
    <SvgWrapper size={size ?? 14} color={iconColor} {...rest}>
      <ReactSVG
        src={images[name].default}
        beforeInjection={(svg) => {
          svg.setAttribute('width', `${size}px`);
          svg.setAttribute('height', `${size}px`);
        }}
      />
    </SvgWrapper>
  );
});
