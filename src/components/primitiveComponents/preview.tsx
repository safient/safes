// for quick preview testing

import React from 'react';
import styled from 'styled-components';

import { Button } from './Buttons/button.comp';
import { Card } from './Card/card.comp';
import { Alert } from './Alerts/alert.comp';
import { Text } from './Text/text.comp';

import Avatar from './Avatar';
export const Container = styled.div`
  width: 100%;
  padding: 100px;
  border: 10px solid tomato;
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

export const Preview: React.FC = () => {
  const url =
    'https://images.pexels.com/photos/4394951/pexels-photo-4394951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  return (
    <>
      <Container>
        <Text variant='primary' size='regular' bold align='left'>
          <br />
          Text with regular size which is bold and aligned left
        </Text>
        <Text as='h1' variant='primary' size='reguar' align='left'>
          <br />
          Text with regular size which is bold and aligned center
        </Text>
        <Text as='h1' variant='success' size='regular' align='left'>
          <br />
          Text with regular size which is bold and aligned left
        </Text>
        <Text as='h1' variant='error' size='regular' align='left'>
          <br />
          Text with regular size which is bold and aligned left
        </Text>
        <Text as='h1' variant='warning' size='regular' align='left'>
          <br />
          Text with regular size which is bold and aligned left
        </Text>
        <Text as='h1' variant='warning' size='regular' align='left'>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae, dignissimos cupiditate facilis
          inventore numquam, aliquam laborum quam aspernatur at, expedita soluta! Cum excepturi ipsa eum nihil in,
          possimus nostrum.
        </Text>{' '}
        <Text as='h1' variant='secondary' size='medium' align='left'>
          <br />
          Text with medium size which is bold and aligned right
        </Text>
        <br />
        <div>
          <Avatar text='B' size='medium' /> <br />
          <Avatar.Group count={12}>
            <Avatar src={url} stacked size='medium' />
            <Avatar text='W' stacked size='medium' />
            <Avatar text='Ana' stacked size='medium' />
          </Avatar.Group>
        </div>{' '}
        <div>
          <Button>Hello</Button>
        </div>
        <br />
        <div>
          <Alert variant='primary'> Hello from Ptimary alert </Alert> <br />
          <Alert variant='secondary'> Hello from Secondary alert </Alert>
          <br />
          <Alert variant='info'> Hello from Info alert </Alert>
          <br />
          <Alert variant='success'> Hello from Success alert </Alert>
          <br />
          <Alert variant='warning'> Hello from Warning alert </Alert>
          <br />
          <Alert variant='error'> Hello from Error alert </Alert>
          <br />
        </div>
        <div>
          <Card />
        </div>
      </Container>
    </>
  );
};
