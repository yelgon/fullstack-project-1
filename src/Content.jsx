import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedContent extends Component {
  logout = () => {
    this.props.dispatch({ type: "logout" });
  };
  render() {
    return (
      <div>
        <button onClick={this.logout}> LOGOUT</button>
      </div>
    );
  }
}
let Content = connect()(UnconnectedContent);
export default Content;
