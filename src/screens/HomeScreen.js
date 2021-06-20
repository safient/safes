import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Col } from '../components/Layouts/Col/Col';
import { Row } from '../components/Layouts/Row/Row';

const Box = styled.div`
  background-color: tomato;
  color: white;
  width: 100%;
  padding: 20px;
`;

export function HomeScreen() {
  return (
    <>
      <h2>
        Stack the columns on mobile by making one full-width and the other
        half-width
      </h2>
      <Row>
        <Col xs={12} md={8}>
          <Box>xs=12 md=8</Box>
        </Col>
        <Col xs={6} md={4}>
          <Box>xs=6 md=4</Box>
        </Col>
      </Row>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
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
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>
          <Box>xs=6</Box>
        </Col>
        <Col xs={6}>
          <Box>xs=6</Box>
        </Col>
      </Row>

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
      </div>
    </>
  );
}
