import React from 'react';
import {NavLink} from 'react-router-dom';

class HeaderColumn extends React.Component {
	render() {
		return (
			<div className="column">
				<NavLink exact to={this.props.path} className="title">
					{this.props.text}
				</NavLink>
			</div>
		);
	}
}

export default HeaderColumn;
