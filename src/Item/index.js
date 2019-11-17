import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Item extends React.Component {
	render() {
		return (
			<Link to={`/producto/${this.props.data.id}`}>
				<div className="item-container">
					<div className="image-container">
						<img src={this.props.data.thumbnail} />
					</div>
					<div className="price-container">
						<span>$ {this.props.data.price}</span>
					</div>
					<div className="title-container">
						<span>{this.props.data.title}</span>
					</div>
				</div>
			</Link>
		);
	}
}

export default Item;
