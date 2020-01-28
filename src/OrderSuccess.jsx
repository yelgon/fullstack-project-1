import React, { Component } from "react";

class OrderSuccess extends Component {
  render() {
    return (
      <div>
        <h2>Successfull!</h2>
        <h2>Thank you for your order</h2>
        <h3>Confirmation No. : {Math.round(Math.random() * 1000000000)}</h3>
        <h5>Your motorcycles are on the way</h5>
      </div>
    );
  }
}
export default OrderSuccess;
