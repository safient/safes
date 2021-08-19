import styled from 'styled-components';
import { ColorType } from './svgIcon.component.props';

export const SvgWrapper = styled.div<{ size: number; color?: ColorType }>`
  display: inline-block;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => (color ? 'iconLight' : 'iconDark')} !important;
  cursor: pointer;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
`;
