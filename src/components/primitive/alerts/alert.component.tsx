import { Text, IconSvg } from 'components/primitive';
import { AlertComponentProps, TextColors, Variant } from './alert.component.props';
import { getVariant, getColor } from './alert.component.utils';

export const Alert: React.FC<AlertComponentProps> = (props) => {
  const { label, variant, icon } = props;

  const BaseAlert = getVariant(variant ? Variant[variant] : undefined);
  const BaseColor = getColor(variant ? TextColors[variant] : undefined);

  return (
    // @ts-ignore - No overload matched this call.
    <BaseAlert row hCenter>
      {icon && <IconSvg color={BaseColor} {...icon} />}
      <Text variant='content' color={BaseColor} {...label} />
    </BaseAlert>
  );
};
