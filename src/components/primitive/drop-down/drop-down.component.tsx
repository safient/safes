// @ts-nocheck - No overload matched this call.
import Select from 'react-select';
import { useTheme } from 'styled-components';
import { Box, Tooltip } from 'components/primitive';
import { DropDownComponentProps } from './drop-down.component.props';
import { DropdownWrapper, StyledDropdown, StyledLabel } from './drop-down.component.styles';

export const DropDown: React.FC<DropDownComponentProps> = (props) => {
  const { label, options, onChange, value, placeholder, info } = props;
  const { colors } = useTheme();

  const customStyles = {
    menu: (provided: any) => ({
      ...provided,
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      color: colors.textLight,
    }),
    input: (provided: any) => ({
      ...provided,
      height: '40px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 100,
      fontSize: '16px',
      color: colors.textLighter,
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'center',
      color: colors.textLighter,
    }),
  };

  return (
    <DropdownWrapper>
      <Box row gap={0.5}>
        <StyledLabel>{label}</StyledLabel>
        {info && <Tooltip text={info} id={info} />}
      </Box>
      <StyledDropdown>
        <Select
          styles={customStyles}
          defaultValue
          onChange={onChange}
          options={options}
          placeholder={value ? value : placeholder}
        />
      </StyledDropdown>
    </DropdownWrapper>
  );
};
