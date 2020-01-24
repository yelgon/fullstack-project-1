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
          <button onClick={this.logout}> LOGOUT</button>
        </div>
        <div>
          <Link to="/">
            <img src="/static/logo2.png" className="Navbar-img" />
          </Link>
        </div>
        <div>
          <Link to="/sell">
            <h3>Want to Sell?</h3>
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img src="/static/cart2.png" className="Navbar-img" />
            <span>{this.props.cartSize}</span>
          </Link>
        </div>
      </div>
    );
  }
}
let Navbar = connect()(UnconnectedNavbar);
export default Navbar;
