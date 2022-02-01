import styled from 'styled-components';
import { IconSvg } from 'components/primitive';
import { PrimaryButton, SmallButton, GhostButton, IconWrapper, ButtonText, Spinner } from './button.component.styles';
import { ButtonComponentProps, Variant } from './button.component.props';

export const Button: React.FunctionComponent<ButtonComponentProps> = (props: ButtonComponentProps) => {
  const { variant, label, icon, loading, onClick, ...rest } = props;

  const getVariant = (variant: Variant = Variant.primary) => {
    let ButtonComponent;
    switch (variant) {
      case Variant.primary:
        ButtonComponent = PrimaryButton;
        break;
      case Variant.small:
        ButtonComponent = SmallButton;
        break;
      case Variant.ghost:
        ButtonComponent = GhostButton;
        break;

      default:
        ButtonComponent = PrimaryButton;
    }
    return ButtonComponent;
  };

  const StyledButton = getVariant(Variant[variant]);

  /**
   * custom styling goes here.
   */
  const StyledButtonComponent = styled(StyledButton)<ButtonComponentProps>`
    background: ${({ color, theme: { colors } }) => color && colors[color]} !important;
  `;

  return (
    // @ts-ignore - No overload matched this call.
    <StyledButtonComponent row vCenter hCenter {...rest} onClick={onClick}>
      {icon && (
        <IconWrapper>
          <IconSvg {...icon} />
        </IconWrapper>
      )}
      {loading && <Spinner />} <ButtonText  {...label} /> 
    </StyledButtonComponent>
  );
};
