import styled, { withTheme } from 'styled-components';
import { AvatarComponentProps, AvatarSize, Variant } from './avatar.component.props';
import { Small, Medium, Large } from './avatar.component.styles';
import { IStyledTheme } from '../../../themes';

export const Avatar: React.FunctionComponent<AvatarComponentProps> = withTheme(
  (props: AvatarComponentProps & IStyledTheme) => {
    const {
      variant,
      name,
      src,
      theme: { images },
      ...rest
    } = props;

    /**
     * option to use either image from external source or local image.
     */
    const url = name ? images[name] : src;

    const getAvatarVariant = (variant: Variant = Variant.small) => {
      let avatar;
      switch (variant) {
        case Variant.small:
          avatar = Small;
          break;
        case Variant.medium:
          avatar = Medium;
          break;
        case Variant.large:
          avatar = Large;
          break;
        default:
          avatar = Small;
      }
      return avatar;
    };

    const StyledAvatarComponent = getAvatarVariant(variant ? Variant[variant] : undefined);

    /**
     * custom styles goes here.
     */
    const AvatarComponent = styled(StyledAvatarComponent)<AvatarComponentProps>`
      height: ${({ size }) => size && `${AvatarSize[size]}rem`};
      width: ${({ size }) => size && `${AvatarSize[size]}rem`};
      border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
    `;

    return <AvatarComponent src={url} {...rest} />;
  }
);
