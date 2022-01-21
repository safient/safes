import { LabelComponentProps, Variant } from './label.component.props';
import { LabelText, SuccessLabel, DangerLabel } from './label.component.styles';

export const Label: React.FC<LabelComponentProps> = (props) => {
  const { variant, labelText, ...rest } = props;

  const textColor = variant === 'danger' ? 'errorLight' : 'successLight';

  const getVariant = (variant: Variant = Variant.success) => {
    let badgeComponent;

    switch (variant) {
      case Variant.success:
        badgeComponent = SuccessLabel;
        break;

      case Variant.danger:
        badgeComponent = DangerLabel;
        break;

      default:
        badgeComponent = SuccessLabel;
    }

    return badgeComponent;
  };

  const StyledBadgeComponent = getVariant(Variant[variant]);

  return (
    // @ts-ignore - No overload matched this call.
    <StyledBadgeComponent row vCenter hCenter {...rest}>
      <LabelText color={textColor} {...labelText} />
    </StyledBadgeComponent>
  );
};
