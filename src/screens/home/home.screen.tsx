import React from 'react';
import { Text, Box, Card, IconSvg } from '../../components/primitive';
import styled from 'styled-components';

const HomeScreenContainer = styled(Box)`
  height: 90vh;
  width: 100vw;
  margin: 3rem !important;
  @media screen and (max-width: 480px) {
    height: 80vh;
    width: 100vw;
  }
`;

const Title = styled(Text)`
  margin-left: 1.5rem;
  @media screen and (max-width: 480px) {
    margin-left: 0.1rem;
  }
`;

const CardsContainer = styled(Box)`
  display: flex;
  flex-direction: row !important;
  flex: 4;
  flex-wrap: wrap;
  background-color: ${({ theme: { colors } }) => colors.applicationBackground};

  @media screen and (max-width: 480px) {
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
  }
`;

const SafeCard = styled(Card)`
  height: 243px !important;
  max-width: 330px !important;
  margin: 15px !important;
  border-radius: 0.5rem;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  background-color: ${({ theme: { colors } }) => colors.white};
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 243px !important;
    max-width: 330px !important;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 243px !important;
    min-width: 330px !important;
    margin: 1.5rem 0 1.5rem !important;
  }
`;

export const SafeText = styled(Text)`
  margin-top: 2rem;
`;

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
