import { IconSvg } from 'components/primitive';
import { AlertComponentProps, Variant } from './alert.component.props';
import { AlertText } from './alert.component.styles';
import { getVariant } from './alert.component.utils';

export const Alert: React.FC<AlertComponentProps> = (props) => {
  const { label, variant, icon } = props;

  const baseAlert = getVariant(variant ? Variant[variant] : undefined);
  const { alertComponent: AlertComponent, iconName, textColor } = baseAlert;

  return (
    // @ts-ignore - No overload matched this call.
    <AlertComponent row hCenter>
      {icon && <IconSvg color={textColor} name={iconName} />}
      <AlertText variant='content' color={textColor} {...label} />
    </AlertComponent>
  );
};
