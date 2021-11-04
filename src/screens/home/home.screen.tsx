import React from 'react';
import { IconSvg } from 'components/primitive';
import { HomeScreenContainer, Title, CardsContainer, SafeCard, SafeText } from './home.screen.styles';

export const HomeScreen: React.FC = () => {
  return (
    <HomeScreenContainer>
      <Title variant='contentHeader' tx='common.safes' />
      <CardsContainer>
        <SafeCard hCenter vCenter>
          <IconSvg name='add' size='xLarge' />
          <SafeText variant='content' tx='common.createSafe' />
        </SafeCard>
      </CardsContainer>
    </HomeScreenContainer>
  );
};
