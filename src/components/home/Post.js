import React from 'react';
import Moment from 'react-moment';
import { Card, CardBody, CardSubtitle, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const postStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  width: 'auto',
  height: 'flex',
  border: '1px solid gray',
  margin: '50px 0px',
};

const Post = (props) => (
  <Card style={postStyle}>
    <CardImg top width="100%" src={props.img} alt="Card image cap" />
    <CardBody>
      <CardTitle>{props.firstName}</CardTitle>
      <CardSubtitle>
        <Moment
          format="MM-DD-YYYY"
        >
          {props.created}
        </Moment>
      </CardSubtitle>
      <CardText>{props.message}</CardText>
      <Button
        color="warning"
        onClick={() => props.removePost(props.id)}
      >
        Remove this Post
      </Button>
    </CardBody>
  </Card>
);

export default Post;
