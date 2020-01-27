import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UnconnectedNavbar extends Component {
  logout = () => {
    this.props.dispatch({ type: "logout" });
  };
  render() {
    return (
      <div className="Navbar">
        <div>
          <Link to="/">
            <img src="/static/logo.jpg" className="Navbar-img" />
          </Link>
        </div>
        <div>
          <Link to="/sell">
            <h3>Want to Sell?</h3>
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img height="50px" src="/static/cart2.png" />
            <span>{this.props.cartSize}</span>
          </Link>
        </div>
        <div>
          <button onClick={this.logout}> LOGOUT</button>
        </div>
      </div>
    );
  }
}
let Navbar = connect()(UnconnectedNavbar);
export default Navbar;
