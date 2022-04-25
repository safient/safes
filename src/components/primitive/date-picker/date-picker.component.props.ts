/**
 * Props supported by DatePicker.
 */

export interface DatePickerComponentProps {
  label: string;
  value: string | any;
  placeholder?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}
