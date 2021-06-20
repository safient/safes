import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Section = styled.section`
  margin-top: 5rem;

  display: flex;
  justify-content: center;
`;

export function ProfileScreen() {
  return <Section>profile</Section>;
}

export default ProfileScreen;
