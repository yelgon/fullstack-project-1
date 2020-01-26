import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
  handleRemove = idx => {
    this.props.removeItem(idx);
  };
  render() {
    return (
      <div>
        <h3> You're buying </h3>
        <div>
          {this.props.cart.map((item, idx) => (
            <div>
              <Link to={"/detail/" + item.model}>
                <img height="100px" src={item.frontendPath} />
              </Link>
              <div>{item.model}</div>
              <div>$ {item.price}</div>
              <button onClick={() => this.handleRemove(idx)}>Remove</button>
            </div>
          ))}
        </div>
        <Link to="/checkout">Checkout</Link>
      </div>
    );
  }
}

export default Cart;
