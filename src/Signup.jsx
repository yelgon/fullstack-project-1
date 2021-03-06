import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { usernameInput: "", passwordInput: "" };
  }
  usernameChange = event => {
    this.setState({ usernameInput: event.target.value });
  };
  passwordChange = event => {
    this.setState({ passwordInput: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    let data = new FormData();
    data.append("username", this.state.usernameInput);
    data.append("password", this.state.passwordInput);
    fetch("/signup", { method: "POST", body: data });
    alert("Signup success");

    this.setState({ usernameInput: "", passwordInput: "" });
  };
  render = () => {
    return (
      <form onSubmit={this.submitHandler} className="signup-box">
        <div className="textbox">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Username"
            value={this.state.usernameInput}
            onChange={this.usernameChange}
          ></input>
        </div>
        <div className="textbox">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input
            type="password"
            placeholder="Password"
            value={this.state.passwordInput}
            onChange={this.passwordChange}
          ></input>
        </div>
        <div>
          <input type="submit" value="SIGNUP" className="btn" />
        </div>
      </form>
    );
  };
}

export default Signup;
