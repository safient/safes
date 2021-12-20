import { TextComponentProps } from './../text/text.component.props';
import { AvatarComponentProps } from './../avatar/avatar.component.props';

export interface StatsComponentProps {
  iconName: AvatarComponentProps;
  heading: TextComponentProps;
  count?: TextComponentProps;
}
