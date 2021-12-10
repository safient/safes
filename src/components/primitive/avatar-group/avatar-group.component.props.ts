import { AvatarComponentProps } from '../avatar/avatar.component.props';

export interface AvatarLists {
  /**
   * Used as Key while mapping through the lists
   */
  id?: string | number;

  /**
   * Fallback option used when there is no ID
   */
  index?: string | number;

  /**
   * Source of the image
   */
  url: string;
}

export interface AvatarGroupComponentProps extends AvatarComponentProps {
  /**
   * List of Avatars present.
   */
  avatars?: AvatarLists[];
}
