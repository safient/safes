import styled from 'styled-components';

export const SvgWrapper = styled.div<{ size: any; color?: any }>`
  display: inline-block;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => color} !important;
  cursor: pointer;
  height: ${({ size }) => size}px;
  line-height: ${({ size }) => size}px;
`;
