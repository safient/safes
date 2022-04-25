// @ts-nocheck
import { useRef, useCallback } from 'react';
import 'flatpickr/dist/themes/airbnb.css';
import { DateLabel, StyledInput } from './date-time.component.styles';
import { DatePickerComponentProps } from './date-picker.component.props';

export const DateTimePicker: React.FC<DatePickerComponentProps> = (props: any) => {
  const { label, value, placeholder, onChange } = props;

  const datePicker = useRef(null);

  const clearDate = useCallback(() => {
    if (datePicker.current) {
      datePicker.current.flatpickr.clear();
    }
  }, [datePicker]);

  return (
    <>
      <DateLabel>{label}</DateLabel>
      <StyledInput
        data-enable-time
        ref={datePicker}
        onChange={onChange}
        options={{ allowInput: true }}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};
