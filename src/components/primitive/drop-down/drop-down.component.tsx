import { DropDownComponentProps, DropDownOptionProps } from './drop-down.component.props';
import { DropdownWrapper, StyledLabel, StyledSelect, StyledOption } from './drop-down.component.styles';

export const DropDown: React.FC<DropDownComponentProps> = (props) => {
  const { label, children, ...rest } = props;

  return (
    <DropdownWrapper {...rest}>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect>{children}</StyledSelect>
    </DropdownWrapper>
  );
};

export const Option: React.FC<DropDownOptionProps> = (props) => {
  const { value, children } = props;

  return <StyledOption value={value}>{children}</StyledOption>;
};
