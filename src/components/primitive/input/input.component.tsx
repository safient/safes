import * as React from 'react';
import { useEffect, createRef } from 'react';
import { Props } from './input.component.props';
import {
  Wrapper,
  InputLabel,
  InputWrapper,
  StyledInput,
} from './input.component.styles';

export const Input = ({
  value,
  type = 'text',
  innerRef,
  variant = 'large',
  width,
  height,
  label,

  isDisabled,
  wrapperProps,

  ...rest
}: Props) => {
  const inputAddonRef = createRef<HTMLDivElement>();
  const [inputAddonWidth, setInputAddonWidth] = React.useState(0);

  useEffect(() => {
    if (inputAddonRef.current) {
      const rect = inputAddonRef.current.getBoundingClientRect();
      setInputAddonWidth(rect.width + 10); // addon ha absolute pos with 10px offset
    } else {
      setInputAddonWidth(0);
    }
  }, [inputAddonRef]);

  return (
    <Wrapper {...wrapperProps}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <StyledInput
          value={value}
          type={type}
          variant={variant}
          disabled={isDisabled}
          width={width}
          ref={innerRef}
          inputAddonWidth={inputAddonWidth}
          {...rest}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default Input;
