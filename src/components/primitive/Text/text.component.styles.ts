import styled from 'styled-components';
import { handleColor, handleSize, handleTextAlign } from './text.component.utils';
import { StyledTextProps } from './text.component.props';

export const Typography = styled.h1<StyledTextProps>`
  color: ${({ theme, variant }) => handleColor(variant, theme)};
  font-size: ${({ theme, size }) => handleSize(size, theme)};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  text-align: ${({ align, theme }) => handleTextAlign(align, theme)};
  line-height: 1;
`;
