import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Mylogo from '../../img/pinterest_profile_image.png';
import '../../styles/greeting.css';

const Greeting = () => (
  <Container fluid>
    <Row className="justify-content-center align-items-center mt-5 mb-5">
      <Col lg="4">
        <h3>Welcome!!</h3>
        <p className="greeting">
          どうもこんにちはArakappaです。
          このちょっと変わった名前の由来を話したいところですが、それは秘密です。<br />
          このwebサイトは作ったものをまとめるために作りました。
          全てReactで書いていますが、デザインやReactの勉強のために各ページごと使用しているプラグインを変えようと思っています。
          webページだけでなくwebアプリやスマホアプリも趣味で作っており、それらはProductsとしてまとめようと思っています。
        </p>
      </Col>
      <Col lg="4">
        <img src={Mylogo} alt="arakappaLogo" />
      </Col>
    </Row>
  </Container>
);

export default Greeting;
