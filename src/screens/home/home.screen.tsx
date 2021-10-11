import React from 'react';
import { IconSvg } from '../../components/primitive';
import { HomeScreenContainer, Title, CardsContainer, SafeCard, SafeText } from './home.screen.styles';

export const HomeScreen: React.FC = () => {
  return (
    <HomeScreenContainer>
      <Title variant='contentHeader'>Safes</Title>
      <CardsContainer>
        <SafeCard hCenter vCenter>
          <IconSvg name='add' size='xLarge' />
          <SafeText variant='content'>Create Safe</SafeText>
        </SafeCard>
      </CardsContainer>
    </HomeScreenContainer>
  );
};
