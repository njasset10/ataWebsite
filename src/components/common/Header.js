import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderColumn from './HeaderColumn';
import { Nav, Navbar, NavbarBrand, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class Header extends React.Component {
	  constructor(props) {
	    super(props);
	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      dropdownOpen: false
	    };
	  }

	  toggle() {
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
	  }

	  render() {
	    return (
        <div style={navBar}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">SGB</NavbarBrand>
            <Nav className="ml-auto" navbar>
            </Nav>
        </Navbar>
        </div>
	    );
	  }
	}

const navBar = {
  body: 'black',
  color: 'white',
};

  <div>
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">SGB</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/aboutSGB">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">Feed</NavLink>
        </NavItem>
      </Nav>
  </Navbar>
  </div>



export default withRouter(Header);
