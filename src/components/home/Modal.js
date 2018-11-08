import React from 'react';
import PostForm from './PostForm';

// The gray background
const backdropStyle = {
  zIndex: '2',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
};

// The modal "window"
const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
};


const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        <PostForm
          addPostMutation={props.addPostMutation}
        />
        <br />
        <button
          onClick={props.closeModal}
        >
          Exit
        </button>
      </div>
    </div>
  );
};


export default Modal;
