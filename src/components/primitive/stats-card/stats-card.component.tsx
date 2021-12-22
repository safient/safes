import { Avatar, Text } from 'components/primitive';
import { StatsComponentProps } from './stats-card.component.props';
import { StatsContainer, CountContainer } from './stats-card.component.styles';

export const StatsCard: React.FC<StatsComponentProps> = (props) => {
  const { heading, count, iconName } = props;

  return (
    <StatsContainer>
      <Avatar size='large' flat {...iconName} />
      <CountContainer>
        <Text variant='small' color='textLight' {...heading} />
        <Text variant='contentHeader' {...count} />
      </CountContainer>
    </StatsContainer>
  );
};
