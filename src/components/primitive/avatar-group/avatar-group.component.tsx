import { Avatar } from 'components/primitive';
import { AvatarGroupComponentProps } from './avatar-group.component.props';
import { AvatarGroupContainer, StyledAvatars } from './avatar-group.component.styles';

export const AvatarGroup: React.FC<AvatarGroupComponentProps> = (props) => {
  const { avatars } = props;

  return (
    <AvatarGroupContainer>
      {!!avatars &&
        avatars.map((item, index) => (
          <StyledAvatars key={index}>
            <Avatar src={item.url} size='small' />
          </StyledAvatars>
        ))}
    </AvatarGroupContainer>
  );
};
