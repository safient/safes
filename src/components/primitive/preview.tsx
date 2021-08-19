// for quick preview testing

import React from 'react';
import styled from 'styled-components';

import { Button } from './Buttons/button.component';
import { Card } from './Card/card-base.component';
import { Alert } from './Alerts/alert.component';
import { Image } from './Image/image.component';

import Avatar from './Avatar';
import { SvgIcon } from './SvgIcons/svgIcon.component';
import Input from './Input/input.component';
import { Text } from './Text/text.component';
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
        <br />
        <div>
          <Avatar text='B' size='medium' /> <br />
          <Avatar.Group count={12}>
            <Avatar src={url} stacked size='medium' />
            <Avatar text='W' stacked size='medium' />
            <Avatar text='Ana' stacked size='medium' />
          </Avatar.Group>
        </div>
        <div>
          <br />
          <div>
            {' '}
            <Button variant='primary'>Test </Button>
          </div>

          <br />
          <div>
            <Button variant='success'>Success</Button>
          </div>
          <br />
          <div>
            <Button variant='warning'>Warning</Button>
          </div>
          <br />
          <div>
            <Button variant='error'>Error</Button>
          </div>
          <br />
          <div>
            <Button variant='ghost'>Ghost</Button>
          </div>
          <br />
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
          <Image
            altText='my image'
            className='img'
            src={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
          />
          <Card />
          <br />
          <div>
            <SvgIcon name='arrowDown' size={14} />
            <SvgIcon name='arrowRight' size={32} />
            <SvgIcon name='arrowDown' size={32} />
            <SvgIcon name='checkActive' size={32} color={'iconLight'} />
          </div>
        </div>
      </Container>
    </>
  );
};
