import { ButtonProps } from './button.props';
import { StyledButton } from './button.styles';

export const Button: React.FC<ButtonProps> = ({ children, variant, wide }) => {
  return (
    <StyledButton variant={variant} wide={wide}>
      {children}
    </StyledButton>
  );
};
