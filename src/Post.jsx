import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div>
        <Link to={"/detail/" + this.props.contents.model}>
          <img
            height="200px"
            width="300px"
            src={this.props.contents.frontendPath}
          />
        </Link>
        <div>{this.props.contents.brand}</div>
        <div>{this.props.contents.model}</div>
        <div>$ {this.props.contents.price}</div>
      </div>
    );
  };
}
export default Post;
