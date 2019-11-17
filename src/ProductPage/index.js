import React from "react";
import Header from "../Header";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
  }

  async componentDidMount() {
    const result = await fetch(
      `https://api.mercadolibre.com/items/${this.props.match.params.id}`
    );
    const resultJson = await result.json();
    this.setState({
      result: resultJson
    });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Product: {this.props.match.params.id}</div>
        <div>Title: {this.state.result.title} </div>
        <div>Price: {this.state.result.price} </div>
        <div>Image: {this.state.result.thumbnail} </div>
        <img src={this.state.result.thumbnail} />
      </React.Fragment>
    );
  }
}

export default ProductPage;
