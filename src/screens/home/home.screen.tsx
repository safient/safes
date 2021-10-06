import React from 'react';
import { Text } from '../../components/primitive';
import styled from 'styled-components';
import { NavBar } from '../../components/primitive/navbar/navbar.component';
import { BottomTab } from '../../components/primitive/bottom-tab/bottom-tab.component';

const HomeContainer = styled.section`
  padding: 10px;
  margin: 10px;
`;
export const HomeScreen: React.FC = () => {
  return (
    <div>
      <NavBar />
      {/* <BottomTab /> */}
    </div>
  );
};
