import styled from 'styled-components';
import { StyledButtonProps } from './button.component.props';
import {
  handleBorderColors,
  handleActiveColors,
  handleDefaultBackground,
  handleDefaultButtonText,
} from './button.component.utils';

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  width: ${({ wide }) => (wide ? `600px` : 'auto')};
  min-width: 10rem;
  height: 4rem;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ variant, theme }) => handleDefaultButtonText(variant, theme)};
  border: ${({ variant, theme }) => handleBorderColors(variant, theme)};
  background-color: ${({ variant, theme }) => handleDefaultBackground(variant, theme)};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:active {
    color: ${({ variant, theme }) => handleActiveColors(variant, theme)};
  }
`;
