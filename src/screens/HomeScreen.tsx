import React from 'react';
import { Text } from '../components/primitiveComponents';
import styled from 'styled-components';

const HomeContainer = styled.section`
  padding: 10px;
  margin: 10px;
`;

export const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <Text variant='primary' bold align='center'>
        Dashboard
      </Text>
    </HomeContainer>
  );
};
