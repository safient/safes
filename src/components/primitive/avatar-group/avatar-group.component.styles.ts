import styled from 'styled-components';

/**
 * Styles for Avatar Container.
 */
export const AvatarGroupContainer = styled.div`
  display: inline-flex;
  width: fit-content;
`;

/**
 * Styles used for overlaping Avatars.
 */
export const StyledAvatars = styled.div`
  &:not(:last-child) {
    margin-right: -10px;
  }
`;
