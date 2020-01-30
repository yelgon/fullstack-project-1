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
          <Link to="/">MotorCycle</Link>
        </div>
        <div>
          <Link to="/sell">Sell</Link>
        </div>
        <div>
          <Link to="/cart">
            Cart
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
