import styled from 'styled-components';
import { IconSvg } from '../../primitive';
import { Primary, Small, GhostButton, IconWrapper, ButtonText } from './button.component.styles';
import { ButtonComponentProps, Variant } from './button.component.props';

export const Button: React.FunctionComponent<ButtonComponentProps> = (props: ButtonComponentProps) => {
  const { variant, label, icon, onClick, ...rest } = props;

  const getVariant = (variant: Variant = Variant.primary) => {
    let ButtonComponent;
    switch (variant) {
      case Variant.primary:
        ButtonComponent = Primary;
        break;
      case Variant.small:
        ButtonComponent = Small;
        break;
      case Variant.ghost:
        ButtonComponent = GhostButton;
        break;
      default:
        ButtonComponent = Primary;
    }
    return ButtonComponent;
  };

  const StyledButton = getVariant(Variant[variant]);

  /**
   * custom styling goes here.
   */
  const StyledButtonComponent = styled(StyledButton)`
    background-color: ${({ color, theme: { colors } }) => color && colors[color]} !important;
  `;

  return (
    // @ts-ignore - no overload matched this call
    <StyledButtonComponent row vCenter hCenter {...rest} onClick={onClick}>
      {icon && (
        <IconWrapper>
          <IconSvg {...icon} />
        </IconWrapper>
      )}
      <ButtonText {...label} />
    </StyledButtonComponent>
  );
};
