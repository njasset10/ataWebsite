import React from 'react';
import './landing.css';
import { Col, Row, Container } from 'react-grid-system';

// TODO: Hil the empty 'li's make it hard for me to know where the images come from
//  any way we can reference the source of the image files?

const Header = () => (
  <div id="body">
    <div id="landing-header">
      <Container>
      <Row>
      <Col md={8} offset={{ md: 2 }}>
        <div>
        <h1 className="title">ATA Website</h1>
        <p className="para">Adam's Awesome Tagline</p>
        </div>
        <div id="scroll">
        </div>
      </Col>
      </Row>
      </Container>
      <a href="/" className="btn btn-lg btn-outline-light">Apply Today</a>
    </div>
  </div>
);

export default Header;
