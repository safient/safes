import { Text } from 'components/primitive';
import { DropDownComponentProps } from './drop-down.component.props';
import {
  DropdownWrapper,
  StyledLabel,
  StyledSelect,
  StyledOption,
  ErrorMessageContainer,
} from './drop-down.component.styles';

export const DropDown: React.FC<DropDownComponentProps> = (props) => {
  const { label, wide, options, children, error, ...rest } = props;

  return (
    // @ts-ignore - No overload matched this call.
    <DropdownWrapper wide={wide}>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect error={error} {...rest}>
        {!!options &&
          options.map((item, index) => (
            <StyledOption value={item.value} key={item.id || index}>
              {item.option}
            </StyledOption>
          ))}
      </StyledSelect>
      {error && (
        <ErrorMessageContainer>
          <Text variant='small' color='error'>
            {error}
          </Text>
        </ErrorMessageContainer>
      )}
    </DropdownWrapper>
  );
};
