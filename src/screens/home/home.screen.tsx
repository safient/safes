import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/primitive';

const HomeContainer = styled.section`
  padding: 10px;
  margin: 10px;
`;
export const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <Text>Home Page</Text>
    </HomeContainer>
  );
};
