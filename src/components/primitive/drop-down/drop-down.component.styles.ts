import styled from 'styled-components';
import { DropDwonProps } from './drop-down.component.props';

export const DropdownWrapper = styled.div<DropDwonProps>`
  display: flex;
  width: ${({ wide }) => (wide ? '40rem' : '100%')} !important;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  font-size: 1.6rem;
  height: 5rem;
  padding: 1rem;
  padding-right: 5rem;
  color: ${({ theme: { colors } }) => colors.textLight};
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 0.5rem;
`;

export const StyledOption = styled.option`
  background: white;
  padding: 1rem !important;
  display: flex;
  white-space: pre;
  color: ${({ theme: { colors } }) => colors.textDark};
`;

export const StyledLabel = styled.label`
  display: inline;
  color: ${({ theme: { colors } }) => colors.textLight};
  font-size: 1.6rem;
  font-weight: 600 !important;
  margin-bottom: 1rem;
`;
