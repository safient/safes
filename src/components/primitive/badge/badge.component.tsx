import { BadgeComponentProps, Variant } from './badge.component.props';
import { BadgeText, DangerBadge, SuccessBadge } from './badge.component.styles';

export const Badge: React.FC<BadgeComponentProps> = (props) => {
  const { variant, label, ...rest } = props;

  const textColor = variant === 'danger' ? 'errorLight' : 'successLight';

  const getVariant = (variant: Variant = Variant.success) => {
    let badgeComponent;

    switch (variant) {
      case Variant.success:
        badgeComponent = SuccessBadge;
        break;

      case Variant.danger:
        badgeComponent = DangerBadge;
        break;

      default:
        badgeComponent = SuccessBadge;
    }

    return badgeComponent;
  };

  const StyledBadgeComponent = getVariant(Variant[variant]);

  return (
    // @ts-ignore - No overload matched this call.
    <StyledBadgeComponent row vCenter hCenter {...rest}>
      <BadgeText color={textColor} {...label} />
    </StyledBadgeComponent>
  );
};
