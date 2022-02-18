import { Box, Text, IconSvg, AvatarGroup } from 'components/primitive';
import { SafeCardContainer, SafeText, MetaInfo } from './safe-card.component.styles';
import { SafeCardProps } from './safe-card.component.props';

export const SafeCard: React.FC<SafeCardProps> = (props) => {
  const { avatars, safeName, roleName } = props;

  return (
    <SafeCardContainer>
      <Box hCenter vCenter marginBottom={5}>
        <IconSvg name='bitcoin' size='xLarge' />
        <SafeText variant='content' text={safeName} />
      </Box>

      <MetaInfo row marginTop={2} color='bottomAccent' padding={2.2} align={'center'}>
        <Box>
          <Text variant='small' tx='common.safeRole' />
          <Text variant='contentHeader' color='textDark' text={roleName} />
        </Box>
        <Box align={'center'} padding={1}>
          <Text variant='small' tx='common.safiens' />
          <Box height={3.2} marginTop={0.8} align={'center'} marginLeft={3.4}>
            <AvatarGroup avatars={avatars} />
          </Box>
        </Box>
      </MetaInfo>
    </SafeCardContainer>
  );
};
