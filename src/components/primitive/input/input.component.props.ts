export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  ref?: React.Ref<HTMLInputElement>;
  label?: React.ReactElement | string;
  innerAddon?: React.ReactNode;
  isDisabled?: boolean;
  type?: string;
  wide?: boolean;
}
