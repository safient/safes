import styled from 'styled-components';
import { ColorType } from './svgIcon.component.props';

export const SvgWrapper = styled.div<{ size: number; color?: ColorType }>`
  display: inline-block;
  height: ${({ size }) => size}px;
  fill: ${(props) => (props.color ? 'iconLight' : 'iconDark')};
  cursor: pointer;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
`;
