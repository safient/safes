import { ButtonProps } from './button.component.props';
import { StyledButton } from './button.component.styles';

export const Button: React.FC<ButtonProps> = ({ children, variant, wide }) => {
  return (
    <StyledButton variant={variant} wide={wide}>
      {children}
    </StyledButton>
  );
};
