import React, {Component} from 'react';
import { Col, Row, Container } from 'react-grid-system';
import { Button } from 'reactstrap';
import Background from '../../assets/images/three.jpg'


const jumboBackground = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '600px',
  width: '100%',
  display: 'flex',
};

const jumboInside = {
  textAlign: 'left',
  color: 'white',
  paddingTop: '5%',
  margin: '40px',
  width: '25%',
  fontSize: '80px',
};

const titleStyle = {
  color: 'white',
}



class IntroSection extends Component {
	render() {
		return (
      <div style={jumboBackground}>
  	    <div style={jumboInside}>
      	     <p><a href="/" style={titleStyle}>Schanz Garbassi Bildner</a></p>
        </div>
      </div>
	  );
	};
};



export default IntroSection;
