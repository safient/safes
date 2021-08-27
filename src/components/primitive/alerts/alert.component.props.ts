interface AlertProps {
  variant?: string | any;
  children?: React.ReactNode | never;
}

interface styledAlertProps extends AlertProps {
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

export type { styledAlertProps, AlertProps };
