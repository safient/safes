import styled from 'styled-components';

const handelVariants = (variant, theme) => {
  switch (variant) {
    case Variants.PRIMARY:
      return `${theme.colors.textPrimary}`;
    case Variants.SECONDARY:
      return `${theme.colors.textPrimaryLighter}`;
    case Variants.SUCCESS:
      return `${theme.colors.textSuccess}`;
    case Variants.WARNING:
      return ` ${theme.colors.textWarning}`;
    case Variants.ERROR:
      return ` ${theme.colors.textError}`;
    default:
      return `${theme.colors.textPrimary}`;
  }
};

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.BUTTON.padding};
  border-radius: ${({ theme }) => theme.BUTTON.borderRadius};
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT.normal};
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.BUTTON.baseActive};
  }
`;
