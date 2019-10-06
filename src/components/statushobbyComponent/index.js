import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Status from './status';
import '../../styles/statushobby.css';

const StatusHobby = () => (
  <Container fluid className="areaup">
    <Row>
      <Col className="bg-light border pt-lg-5" sm="12" lg="6">
        <Status />
      </Col>
      <Col className="bg-light border" sm="12" lg="6">
        <div className="conta-hobby">
          <Link to="/Game" className="first-hobby">
            GAME
          </Link>
          <Link to="/Belong" className="second-hobby">
            Belong
          </Link>
          <div className="third-hobby">
            DTM
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default StatusHobby;
