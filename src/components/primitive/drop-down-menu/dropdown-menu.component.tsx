// @ts-nocheck

import { useState, useRef, useEffect } from 'react';
import { Avatar, Box } from 'components/primitive';
import { IconContainer, DropDownContainer } from './dropdown-menu.component.styles';

export const DropDownMenu = (props: any) => {
  const [isActive, setIsActive] = useState(false);

  const { icon, children } = props;

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu.
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isActive]);

  return (
    <Box>
      <Box>
        <IconContainer onClick={() => setIsActive((oldState) => !oldState)}>
          <Avatar size='small' {...icon} />
        </IconContainer>
      </Box>

      {isActive && <DropDownContainer ref={ref}>{children}</DropDownContainer>}
    </Box>
  );
};
