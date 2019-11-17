import React from "react";
import Home from "./Home";
import ProductPage from "./ProductPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/producto/:id" component={ProductPage} />
				</Router>
			</div>
		);
	}
}
export default App;
