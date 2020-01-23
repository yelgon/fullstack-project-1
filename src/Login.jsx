import React, { Component } from "react";
import { connect } from "react-redux";

class UnconnectedLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  submitHandler = async event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    let response = await fetch("/login", {
      method: "POST",
      body: data,
      credentials: "include"
    });
    let responseBody = await response.text();
    let body = JSON.parse(responseBody);
    if (body.success) {
      alert("Login Success");
      this.props.dispatch({ type: "login-success" });
      this.setState({ username: "", password: "" });
    }
  };
  render = () => {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          Username{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div>
          Password{" "}
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          ></input>
        </div>
        <div>
          <input type="submit" value="LOGIN" />
        </div>
      </form>
    );
  };
}
let Login = connect()(UnconnectedLogin);
export default Login;
