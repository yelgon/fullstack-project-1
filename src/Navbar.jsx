import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import styled from "styled-components";

class UnconnectedNavbar extends Component {
  logout = () => {
    this.props.dispatch({ type: "logout" });
  };
  render() {
    return (
      <div className="Navbar">
        <div>
          <Link to="/sell" className="navbar-link">
            SELL
          </Link>
        </div>
        <div>
          <Link to="/" className="navbar-link logo">
            MOTORCYCLE
          </Link>
        </div>
        <div>
          <Link to="/cart" className="navbar-link">
            CART (<span>{this.props.cartSize}</span>)
          </Link>
        </div>
        <div>
          <button onClick={this.logout} className="navbar-link">
            {" "}
            LOGOUT
          </button>
        </div>
      </div>
    );
  }
}
let Navbar = connect()(UnconnectedNavbar);
export default Navbar;
