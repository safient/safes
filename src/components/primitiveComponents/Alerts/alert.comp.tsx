import { AlertContainer } from './alert.styles';
import { AlertProps } from './alert.props';

export const Alert: React.FC<AlertProps> = ({ variant, children }) => {
  return <AlertContainer variant={variant}>{children}</AlertContainer>;
};
