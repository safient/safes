import styled from 'styled-components';

export const DropdownWrapper = styled.form`
  display: flex;
  width: 40rem;
  flex-flow: column;
  justify-content: flex-start;
`;

export const StyledSelect = styled.select`
  /* reset */

  max-width: 400px;
  height: 50px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export const StyledOption = styled.option`
  color: black;
  background: white;
  font-weight: small;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px !important;
`;

export const StyledLabel = styled.label`
  display: inline;
  color: ${({ theme: { colors } }) => colors.textLight};
  font-family: 'Inter', sans-serif !important;
  font-size: 1.6rem;
  font-weight: 600 !important;
  margin-bottom: 1rem;
`;

export const DropDown = (props: any) => {
  return (
    <>
      <DropdownWrapper {...props}>
        <StyledLabel>{props.formLabel}</StyledLabel>
        <StyledSelect>{props.children}</StyledSelect>
      </DropdownWrapper>
    </>
  );
};

export function Option(props: any) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}
