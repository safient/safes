import { TextComponentProps } from './../text/text.component.props';
import { AvatarComponentProps } from './../avatar/avatar.component.props';

export interface StatsComponentProps {
  /**
   * Name of the Icon.
   */
  iconName: AvatarComponentProps;

  /**
   * Headline for Stats Card.
   */
  heading: TextComponentProps;

  /**
   * Count for Stats Card.
   */
  count?: TextComponentProps;
}
