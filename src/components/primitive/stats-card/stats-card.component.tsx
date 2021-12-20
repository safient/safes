import styled from 'styled-components';
import { Avatar, Text } from '..';
import { StatsComponentProps } from './stats-card.component.props';

export const StatsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  width: fit-content;
`;
export const CountContainer = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;
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
