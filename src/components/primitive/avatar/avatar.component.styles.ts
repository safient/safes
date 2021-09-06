import styled from 'styled-components';
import { AvatarComponentProps } from './avatar.component.props';
import { Image } from '../image/image.component';

/**
 * Styles for small sized Avatar
 */
export const Small = styled(Image)<AvatarComponentProps>`
  height: 3rem;
  width: 3rem;
  border: 1px solid white;
  border-radius: ${({ flat }) => (flat ? '0.5rem' : '50%')};
`;

/**
 * Styles for Medium sized Avatar
 */
export const Medium = styled(Small)<AvatarComponentProps>`
  height: 6rem;
  width: 6rem;
`;

/**
 * Styles for Large sized Avatar
 */
export const Large = styled(Medium)<AvatarComponentProps>`
  height: 10rem;
  width: 10rem;
`;
