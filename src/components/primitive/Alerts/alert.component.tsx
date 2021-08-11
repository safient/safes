import { AlertContainer } from './alert.component.styles';
import { AlertProps } from './alert.component.props';

export const Alert: React.FC<AlertProps> = ({ variant, children }) => {
  return <AlertContainer variant={variant}>{children}</AlertContainer>;
};
