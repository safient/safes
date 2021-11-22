import styled, { keyframes } from 'styled-components';
import { Avatar } from '..';

export const AvatarGroupContainer = styled.div`
  display: flex;
`;

export const StyledAvatars = styled.div`
  margin-left: -10px;
`;

export const AvatarGroup = () => {
  return (
    <AvatarGroupContainer>
      <StyledAvatars>
        <Avatar name='safientAvatar' size='small' />
      </StyledAvatars>
      <StyledAvatars>
        <Avatar name='safientAvatar' size='small' />
      </StyledAvatars>
      <StyledAvatars>
        <Avatar name='safientAvatar' size='small' />
      </StyledAvatars>
    </AvatarGroupContainer>
  );
};
