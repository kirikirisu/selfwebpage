import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const MiddleArea = ({ title, paragraph }) => (
  <Jumbotron fluid>
    <Container>
      <h1>{title}</h1>
      <p style={{ size: 4 }}>
        {paragraph}
      </p>
    </Container>
  </Jumbotron>
);

export default MiddleArea;
