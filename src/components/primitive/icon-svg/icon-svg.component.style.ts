import styled from 'styled-components';
import { Color } from '../../../themes';

interface SvgWrapperProps {
  color?: Color;
}

export const SvgWrapper = styled.div<SvgWrapperProps>`
  display: inline-block;
  fill: ${({ color, theme: { colors } }) => (color ? colors[color] : colors.black)};
  cursor: pointer;
`;
