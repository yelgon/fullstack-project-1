import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainTitle = styled.div`
  border-bottom: 3px double black;
  margin: 200px;
  margin-bottom: 0;
  margin-top: 0;
`;
const TotalCost = styled.div`
  font-size: 30px;
  text-align: center;
`;
const Bottom = styled.div`
  display: grid;
  margin: 100px;
  grid-template-columns: 80% auto;
  justify-items: end;
`;
class Cart extends Component {
  handleRemove = (item, idx) => {
    this.props.removeItem(item, idx);
  };
  render() {
    return (
      <div>
        <MainTitle>
          {" "}
          <h2>Items In Your Cart</h2>{" "}
        </MainTitle>
        {this.props.cart.map((item, idx) => (
          <div className="Cart-wrapper">
            <Link to={"/detail/" + item.model}>
              <img height="100px" src={item.frontendPath} className="picture" />
            </Link>
            <div className="year">{item.year}</div>
            <div className="model">{item.model}</div>
            <div className="price">$ {item.price}</div>
            <div className="remove">
              {" "}
              <button
                onClick={() => this.handleRemove(item, idx)}
                className="remove-button"
              >
                Remove
              </button>{" "}
            </div>
          </div>
        ))}
        <Bottom>
          <TotalCost>
            <div>Total Cost : $ {this.props.total}</div>
          </TotalCost>
          <Link to="/checkout" className="checkout">
            Checkout
          </Link>
        </Bottom>
      </div>
    );
  }
}

export default Cart;
