// for quick preview testing

import React from 'react';
import styled from 'styled-components';

import { Heading, SubHeading, Text } from './Typography/text.component';
import { Button } from './Buttons/buttons.component';

import { Alert } from './Alerts/alert.component';

export const Container = styled.div`
  width: 100%;
  padding: 100px;
  border: 10px solid tomato;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 40px;

  margin-top: 30px;
`;

export const HeadingContainer = styled.div`
  > {
    margin-bottom: 10px;
  }
`;

export const Preview = () => {
  return (
    <>
      <Container>
        <HeadingContainer>
          <Text>Hello from Text Normal</Text>
          <br />
          <Text bold>Hello from Text Bold</Text> <br />
          <Heading>Hello from heading Normal</Heading> <br />
          <Heading bold>Hello from heading Bold</Heading> <br />
          <SubHeading>Hello from subHeading Normal</SubHeading> <br />
          <SubHeading bold>
            Hello from heading Sub Heading Normal
          </SubHeading>{' '}
          <br />
          <Heading> Varients</Heading> <br />
          <SubHeading bold modifiers='success'>
            Hello from heading Sub Heading Normal
          </SubHeading>{' '}
          <br />
          <SubHeading bold modifiers='warning'>
            Hello from heading Sub Heading Normal
          </SubHeading>{' '}
          <br />
          <SubHeading bold modifiers='error'>
            Hello from heading Sub Heading Normal
          </SubHeading>
        </HeadingContainer>
        <ButtonContainer>
          <Button>Hello</Button>
          <Button modifiers='success'>Success</Button>
          <Button modifiers='warning'>Warning</Button>
          <Button modifiers='error'> Error</Button>
          <Button disabled>Disabled</Button>
          <Button modifiers='secondary'>Cancel</Button>
        </ButtonContainer>{' '}
        <br />
        <Alert>This is a primary alert</Alert> <br />
        <Alert modifiers='warning'>This is a warning alert</Alert> <br />
        <Alert modifiers='success'>This is a success alert</Alert> <br />
        <Alert modifiers='error'>This is a danger alert</Alert> <br />
      </Container>
    </>
  );
};
