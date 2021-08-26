import { IconProps, sizes } from './icon-svg.component.props';
import { ReactSVG } from 'react-svg';
import { SvgWrapper } from './icon-svg.component.style';
import { withTheme } from 'styled-components';
import { IStyledTheme } from '../../../themes/styled-components';

export const IconSvg: React.FunctionComponent<IconProps> = withTheme((props: IconProps & IStyledTheme) => {
  const {
    size = 'medium',
    color,
    name,
    theme: { images },
  } = props;

  return (
    <SvgWrapper color={color}>
      <ReactSVG
        src={images[name]}
        beforeInjection={(svg) => {
          svg.setAttribute('width', `${sizes[size]}px`);
          svg.setAttribute('height', `${sizes[size]}px`);
        }}
      />
    </SvgWrapper>
  );
});
