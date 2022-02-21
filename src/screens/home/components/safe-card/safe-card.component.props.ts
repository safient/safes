export interface AvatarProps {
  /**
   * Used as Key while mapping through the lists
   */
  id?: string | number;

  /**
   * Fallback option used when there is no ID
   */
  index?: string | number;

  /**
   * URL of avatar
   */
  url: string;
}

/**
 * Props supported by SafeCard component.
 */
export interface SafeCardProps {
  safeName: string;
  roleName: string;
  avatars?: AvatarProps[];
}
