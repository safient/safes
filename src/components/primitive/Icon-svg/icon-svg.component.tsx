import React from 'react';
import { ReactSVG } from 'react-svg';
import { withTheme } from 'styled-components';
import { IconProps, Size } from './icon-svg.component.props';
import { SvgWrapper } from './icon-svg.component.style';
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
          svg.setAttribute('width', `${Size[size]}px`);
          svg.setAttribute('height', `${Size[size]}px`);
        }}
      />
    </SvgWrapper>
  );
});
