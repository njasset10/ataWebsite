import React from 'react';
import './landing.css';
import { Col, Row, Container } from 'react-grid-system';
import logo from '../../assets/images/blueSGB.png';

// TODO: Hil the empty 'li's make it hard for me to know where the images come from
//  any way we can reference the source of the image files?

const Header = () => (
  <div id="body">
    <div id="landing-header">
      <Container>
      <Row>
      <Col md={8} offset={{ md: 2 }}>
        <div>
        <h1 className="title">SGB</h1>
        <p className="para">Distributing the power of Astrid and Eli to make the world a better place.</p>
        </div>
        <div id="scroll">
        <p className="intro">Please capture and share your special moments throughout the weekend and help us show SGB just how much love they bring to the world.</p>
        </div>
      </Col>
      </Row>
      </Container>
      <a href="/home" className="btn btn-lg btn-outline-light">Share Your Moment with SGB</a>
    </div>
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Header;
