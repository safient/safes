import { useState } from 'react';
import { Box, IconSvg, Text } from 'components/primitive';
import { AccordionProps } from './accordion.component.props';
import { AccordionContainer, IconContainer, LabelContainer } from './accordion.component.styles';

export const Accordion: React.FC<AccordionProps> = (props) => {
  const { label, children } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionContainer>
      <LabelContainer>
        <Text>{label}</Text>
        <IconContainer align={'end'} onClick={() => setIsActive(!isActive)}>
          <IconSvg name={isActive ? 'arrowUp' : 'arrowDown'} size='xLarge' />
        </IconContainer>
      </LabelContainer>

      {isActive && <Box style={{ transition: 'all .5s ease-in-out' }}>{children}</Box>}
    </AccordionContainer>
  );
};
