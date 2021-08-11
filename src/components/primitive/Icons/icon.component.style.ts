import styled from 'styled-components';
import { ColorType } from './icon.component.props';
export const SvgWrapper = styled.div<{ size: number; color?: ColorType }>`
  display: inline-block;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => (color ? color : '')} !important;
  cursor: pointer;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
`;
