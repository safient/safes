import React from 'react';
import { Text } from '../../components/primitive';
import styled from 'styled-components';
// import { Col } from '../../components/primitive';
// import { Row } from '../../components/primitive';
import { Row, Col } from 'react-grid-system';

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
      <br />
      <Text variant='contentHeader' bold>
        Setting one column width#
      </Text>
      <br />
      <br />
      <Text variant='small'>
        Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns
        automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline
        widths. Note that the other columns will resize no matter the width of the center column.
      </Text>
      <br />
      <br />
      <br />
      <div>
        <Row debug>
          <Col debug>1 of 3</Col>
          <Col xs={6} debug>
            2 of 3 (wider)
          </Col>
          <Col debug>3 of 3</Col>
        </Row>
        <Row debug>
          <Col debug>1 of 3</Col>
          <Col xs={5} debug>
            2 of 3 (wider)
          </Col>
          <Col debug>3 of 3</Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Text variant='contentHeader' bold>
        Mix and match breakpoints to create different grids depending on the screen size.
      </Text>
      <div>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row debug>
          <Col xs={12} md={8} debug>
            xs=12 md=8
          </Col>
          <Col xs={6} md={4} debug>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4} debug>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4} debug>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4} debug>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row debug>
          <Col xs={6} debug>
            xs=6
          </Col>
          <Col xs={6} debug>
            xs=6
          </Col>
        </Row>
      </div>
    </HomeContainer>
  );
};
