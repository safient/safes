import { Variant, TextColors, IconName } from './alert.component.props';
import { WarningAlert, ErrorAlert, SuccessAlert, InfoAlert } from './alert.component.styles';

/**
 *
 * @param variant
 * @returns style based on Variant passed by user.
 */

export const getVariant = (variant: Variant = Variant.success) => {
  let alertComponent, textColor, iconName;

  switch (variant) {
    case Variant.warning:
      alertComponent = WarningAlert;
      textColor = TextColors.warning;
      iconName = IconName.warning;
      break;

    case Variant.error:
      alertComponent = ErrorAlert;
      textColor = TextColors.error;
      iconName = IconName.error;
      break;

    case Variant.info:
      alertComponent = InfoAlert;
      textColor = TextColors.info;
      iconName = IconName.info;
      break;

    default:
      alertComponent = SuccessAlert;
      textColor = TextColors.success;
      iconName = IconName.success;
  }

  return { alertComponent, iconName, textColor };
};
