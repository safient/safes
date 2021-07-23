import styled from 'styled-components';

export const SvgWrapper = styled.div<{ size: number; color?: string }>`
  display: inline-block;
  height: ${({ size }) => size}px;
  fill: ${({ color }) => (color ? color : '#6b7280')} !important;
  cursor: pointer;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
`;
