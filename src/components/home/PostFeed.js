import React, { Component } from 'react';
import { Col, Row, Container } from 'react-grid-system';
import { Card, CardBody, CardDeck, CardSubtitle, CardImgOverlay, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import GraphService from '../../service/GraphService';
import graphUtil from './graph-util';
import AddPostButton from './AddPostButton';
import Post from './Post';

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoading: true,
    });

    GraphService.getAllPosts()
      .then(data => {
        this.setState({
          posts: data,
          isLoading: false,
        });
      }).catch(error => {
        this.setState({
          posts: [],
        });
      });
  }

  handleSubmit(message, firstName, lastName, imageURL, e) {
    let mutation = `mutation{
    createPost(
      message:"${message}"
      posterFirstName:"${firstName}"
      posterLastName: "${lastName}"
      imageURL: "${imageURL}"
      status: Live
    ) {
      id
      message
      imageURL
      posterLastName
      posterFirstName
      createdAt
    }
  }`;
    graphUtil.graphFetch(mutation)
      .then(data => {
        if (data.data.createPost.id) {
          this.setState({
            isLoading: true,
          });
          GraphService.getAllPosts()
            .then(data2 => {
              this.setState({
                posts: data2,
                isLoading: false,
              });
            }).catch(error => {
              this.setState({
                posts: [],
              });
            });
          this.props.handleCloseClick(e);
        } else {
          console.log("uh oh..." + JSON.stringify(data.data));
        }
      });
  }

  removePost(id) {
    let mutation = `mutation{
    updatePost(
      id:"${id}"
      status: Canceled
    ) {
      id
    }
  }`;
    graphUtil.graphFetch(mutation)
      .then(data => {
        if (data.data.updatePost.id) {
          this.setState({
            isLoading: true,
          });
          GraphService.getAllPosts()
            .then(data2 => {
              this.setState({
                posts: data2,
                isLoading: false,
              });
            }).catch(error => {
              this.setState({
                posts: [],
              });
            });
        } else {
          console.log("uh oh..." + JSON.stringify(data.data));
        }
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <AddPostButton
          openClick={this.props.handleOpenClick}
          closeClick={this.props.handleCloseClick}
          showModal={this.props.showModal}
          addPostMutation={this.handleSubmit}
        />
        <Container>
          <Row>
            <Col md={8} offset={{ md: 2 }}>
              {this.state.posts.map(post => (
                <Post
                  img={post.imageURL}
                  firstName={post.posterFirstName}
                  created={post.createdAt}
                  message={post.message}
                  id={post.id}
                  removePost={this.removePost}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const postStyle = {
  zIndex: '-1',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  width: 'auto',
  height: 'flex',
  border: '1px solid gray',
  margin: '50px 0px',
};

function renderPosts(img, firstName, created, message) {
  return (
    <Card style={postStyle}>
      <CardImg top width="100%" src={img} alt="Card image cap" />
      <CardBody>
        <CardTitle>{firstName}</CardTitle>
        <CardSubtitle>{created}</CardSubtitle>
        <CardText>{message}</CardText>
      </CardBody>
    </Card>
  );
}

export default PostFeed;
