import { DropDwonProps, OptionsProps } from './drop-down.component.props';
import { DropdownWrapper, StyledLabel, StyledSelect, StyledOption } from './drop-down.component.styles';

export const DropDown: React.FC<DropDwonProps> = (props) => {
  const { label, children, ...rest } = props;

  return (
    <DropdownWrapper {...rest}>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect>{children}</StyledSelect>
    </DropdownWrapper>
  );
};

export const Option: React.FC<OptionsProps> = (props) => {
  const { value, children } = props;

  return <StyledOption value={value}>{children}</StyledOption>;
};
