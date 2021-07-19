import React from 'react';
import styled from 'styled-components';

import { Col } from '../components/primitiveComponents/layouts';
import { Row } from '../components/primitiveComponents/layouts';

const Box = styled.div`
  background-color: tomato;
  color: white;
  width: 100%;
  padding: 20px;
  margin: 10px 0px;
`;
const HomeContainer = styled.section`
  padding: 10px;
  margin: 10px;
`;

const Text = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
`;

export const HomeScreen: React.FC = () => {
  return (
    <HomeContainer>
      <Text>Stack the columns on mobile by making one full-width and the other half-width</Text>
      {/* <Row>
        <Col xs={12} md={8}>
          <Box>xs=12 md=8</Box>
        </Col>
        <Col xs={6} md={4}>
          <Box>xs=6 md=4</Box>
        </Col>
      </Row>

      <Text>
        {' '}
        Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop
      </Text>
      <Row>
        <Col xs={6} md={4}>
          <Box>xs=6 md=4</Box>
        </Col>
        <Col xs={6} md={4}>
          <Box>xs=6 md=4</Box>
        </Col>
        <Col xs={6} md={4}>
          <Box>xs=6 md=4</Box>
        </Col>
      </Row>
      <Text> Columns are always 50% wide, on mobile and desktop</Text>
      <Row>
        <Col xs={6}>
          <Box>xs=6</Box>
        </Col>
        <Col xs={6}>
          <Box>xs=6</Box>
        </Col>
      </Row>

      <h3>Verticle alignment</h3>

      <div>
        <Text>Start</Text>
        <Row align='start' style={{ height: '75px' }} debug>
          <Col debug> 1 of 3</Col>
          <Col debug> 2 of 3</Col>
          <Col debug> 3 of 3</Col>
        </Row>
        <br />

        <Text>Center</Text>
        <Row align='center' style={{ height: '75px' }} debug>
          <Col>
            {' '}
            <Box>2 of 3 </Box>{' '}
          </Col>
          <Col>
            {' '}
            <Box> 3 of 3</Box>
          </Col>
          <Col>
            {' '}
            <Box>1 of 3 </Box>
          </Col>
        </Row>
        <br />

        <Text>End</Text>
        <Row align='end' style={{ height: '75px' }} debug>
          <Col debug>1 of 3</Col>
          <Col debug>2 of 3</Col>
          <Col debug>3 of 3</Col>
        </Row>
        <br />

        <Text>Stretch</Text>
        <Row align='stretch' style={{ height: '75px' }}>
          <Col>
            <Box> 1 of 3</Box>{' '}
          </Col>
          <Col>
            <Box>2 of 3 </Box>
          </Col>
          <Col>
            <Box> 3 of 3 </Box>
          </Col>
        </Row>
      </div>
      <Text>Horizontal Aignment </Text>
      <div>
        <Row justify='start' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
        <br />
        <Row justify='center' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
        <br />
        <Row justify='end' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
        <br />
        <Row justify='between' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
        <br />
        <Row justify='around' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
        <br />
        <Row justify='initial' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
        <br />
        <Row justify='inherit' debug>
          <Col xs={3} debug>
            1 of 3
          </Col>
          <Col xs={3} debug>
            2 of 3
          </Col>
          <Col xs={3} debug>
            3 of 3
          </Col>
        </Row>
      </div> */}
    </HomeContainer>
  );
};
