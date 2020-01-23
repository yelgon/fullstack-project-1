import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.contents.description,
      brand: this.props.contents.brand,
      model: this.props.contents.model,
      price: this.props.contents.price
    };
  }

  render = () => {
    return (
      <div>
        <div>{this.state.brand}</div>
        <img src={this.props.contents.frontendPath} />
        {/* <Link to={"/detail/" + this.state.model}>
          <img src={this.props.contents.frontendPath} />
        </Link> */}
        <div>{this.state.model}</div>
        <div>$ {this.state.price}</div>
      </div>
    );
  };
}
export default Post;
