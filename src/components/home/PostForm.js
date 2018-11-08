import React, { Component } from 'react';
import axios from 'axios';
import { FormText, Form, FormGroup, Label, Input, Col } from 'reactstrap';

function renderInput(htmlFor, id, value, handleChange, type) {
  return (
    <FormGroup row>
      <Label for={htmlFor} sm={2}>{htmlFor}</Label>
      <Col sm={10}>
        <Input placeholder={htmlFor} type={type} id={id} value={value} onChange={handleChange} />
      </Col>
    </FormGroup>
  );
}

function renderSubmit(showSubmitButton) {
  if (showSubmitButton) {
    return (
      <input type="submit" value="Submit" />
    );
  }
  return (
    <p>Loading...</p>
  );
}

function renderDropZone(handleDrop, file) {
  if (file) {
    return (
      <p>{"Photo Added! Click 'Submit' when you're ready"}</p>
    );
  }
  return (
    <FormGroup row>
      <Label for="exampleFile" sm={2}>Photo</Label>
      <Col sm={10}>
        <Input onChange={handleDrop} placeHolder="image" type="file" id="imageId" />
        <FormText color="muted">
          Yea, awesome
        </FormText>
      </Col>
    </FormGroup>
  );
}

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      firstName: '',
      lastName: '',
      file: '',
      submitIsEnabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(event) {
    this.setState({
      file: document.getElementById('imageId').files[0],
    });
  }

  handleChange(event) {
    if (event.target.id === 'message') {
      this.setState({
        message: event.target.value,
      });
    }
    if (event.target.id === 'firstName') {
      this.setState({
        firstName: event.target.value,
      });
    }
    if (event.target.id === 'lastName') {
      this.setState({
        lastName: event.target.value,
      });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submitIsEnabled: false,
    });
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('upload_preset', 'g1njelpj');

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/phi/image/upload',
      formData,
    );
    this.props.addPostMutation(this.state.message, this.state.firstName, this.state.lastName, response.data.url);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <strong>Share your moment with SGB!</strong>
        {renderInput('Name', 'firstName', this.state.firstName, this.handleChange, 'text')}
        {renderInput('Message', 'message', this.state.message, this.handleChange, 'textarea')}
        {renderDropZone(this.onDrop, this.state.file)}
        {renderSubmit(this.state.submitIsEnabled)}
      </Form>
    );
  }
}

const formStyle = {
  zIndex: 1,
};

export default PostForm;
