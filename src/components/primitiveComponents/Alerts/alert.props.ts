export enum Variants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export interface AlertProps {
  variant?: string | any;
  children?: React.ReactNode | never;
}

export interface styledAlertProps extends AlertProps {
  maxWidth: number;
  border: string;
  borderRadius: number;
  fontWeight?: number;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  variant?: string | any;
  theme?: any;
  padding: string;
  children?: React.ReactNode | never;
}
