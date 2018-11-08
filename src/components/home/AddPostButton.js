import React from 'react';
import { Button } from 'reactstrap';
import { Col, Row, Container } from 'react-grid-system';
import Modal from './Modal';

const AddPostButton = (props) => (
  <Container>
    <Row>
      <Col md={8} offset={{ md: 2 }}>
      <br />
        <Button
          style={buttonStyle}
          color="info"
          onClick={props.openClick}
          block
        >
          Share Your SGB Moment
        </Button>
        <Modal
          closeModal={props.closeClick}
          showModal={props.showModal}
          addPostMutation={props.addPostMutation}
        />
      </Col>
    </Row>
  </Container>
);

const addPost = {
  marginTop: '30px',
  width: '300px',
  display: 'block',
  margin: 'auto',
  paddingTop: '40px',
};

const buttonStyle = {
  position: 'relative',
  textAlign: 'center',
};


export default AddPostButton;
