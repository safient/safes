import styled from 'styled-components';
import { BadgeComponentProps, Variant } from './badge.component.props';
import { ButtonText, DangerBadge, SuccessBadge, WarningBadge } from './badge.component.styles';

export const Badge: React.FC<BadgeComponentProps> = (props) => {
  const { variant = 'success', label, ...rest } = props;

  const getVariant = (variant: Variant = Variant.success) => {
    let BadgeComponent;
    switch (variant) {
      case Variant.success:
        BadgeComponent = SuccessBadge;
        break;

      case Variant.warning:
        BadgeComponent = WarningBadge;
        break;
      case Variant.danger:
        BadgeComponent = DangerBadge;
        break;

      default:
        BadgeComponent = SuccessBadge;
    }
    return BadgeComponent;
  };

  const StyledBadge = getVariant(Variant[variant]);

  const StyledBadgeComponent = styled(StyledBadge)`
    background: ${({ color, theme: { colors } }) => color && colors[color]} !important;
  `;

  return (
    // @ts-ignore - No overload matched this call.
    <StyledBadgeComponent row vCenter hCenter {...rest}>
      <ButtonText {...label} />
    </StyledBadgeComponent>
  );
};
