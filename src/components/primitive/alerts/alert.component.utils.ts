import { Variant, TextColors } from './alert.component.props';
import { WarningAlert, ErrorAlert, SuccessAlert } from './alert.component.styles';

export const getVariant = (variant: Variant = Variant.success) => {
  let AlertComponent;

  switch (variant) {
    case Variant.warning:
      AlertComponent = WarningAlert;
      break;

    case Variant.error:
      AlertComponent = ErrorAlert;
      break;

    default:
      AlertComponent = SuccessAlert;
  }

  return AlertComponent;
};

export const getColor = (variant: TextColors = TextColors.success) => {
  let color;

  switch (variant) {
    case TextColors.warning:
      color = TextColors.warning;
      break;

    case TextColors.error:
      color = TextColors.error;
      break;

    default:
      color = TextColors.success;
  }
  return color;
};
