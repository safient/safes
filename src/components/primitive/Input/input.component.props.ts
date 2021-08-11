interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  innerRef?: React.Ref<HTMLInputElement>;
  variant?: 'small' | 'large';
  label?: React.ReactElement | string;
  labelAddon?: React.ReactElement;
  labelRight?: React.ReactElement;
  innerAddon?: React.ReactNode;
  isDisabled?: boolean;

  wrapperProps?: Record<string, any>;
  type?: string;

  labelAddonIsVisible?: boolean;
  height?: number;
}

interface WrappedProps {
  width?: any;
}

interface InputProps extends Props {
  inputAddonWidth?: number;
}

export type { InputProps, Props, WrappedProps };
