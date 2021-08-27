import React from 'react';
import { Text } from '../../components/primitive';
import styled from 'styled-components';

const HomeContainer = styled.section`
  padding: 10px;
  margin: 10px;
`;

export const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <Text variant='title' bold>
        Dashboard
      </Text>
    </HomeContainer>
  );
};
