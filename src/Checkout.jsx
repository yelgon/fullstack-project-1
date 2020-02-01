import React, { Component } from "react";
import styled from "styled-components";

const Payment = styled.div``;

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { yearlyCost: 0, terms: 1, rate: 0.0099 };
  }
  componentDidMount() {
    this.setState({
      yearlyCost:
        (this.props.totalCost *
          Math.pow(1 + this.state.rate, this.state.terms) *
          this.state.rate) /
        (Math.pow(1 + this.state.rate, this.state.terms) - 1)
    });
  }
  termHandler = event => {
    this.setState({ terms: parseInt(event.target.value, 10) });
  };
  rateHandler = event => {
    this.setState({ rate: parseFloat(event.target.value, 10) });
  };
  submitHandler = () => {
    event.preventDefault();
    this.setState({
      yearlyCost:
        (this.props.totalCost *
          Math.pow(1 + this.state.rate, this.state.terms) *
          this.state.rate) /
        (Math.pow(1 + this.state.rate, this.state.terms) - 1)
    });
  };
  proceedToCheckout = () => {
    this.props.clearToCart();
    alert("Thank you for your order\r\n Automatically paid every month");
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="checkout-background">
        <div className="checkout-box">
          <h2>Total Price : $ {this.props.totalCost} </h2>
          <form onSubmit={this.submitHandler} className="total-form">
            <div>
              <h4>Terms</h4>
              <select onChange={this.termHandler}>
                <option value="1">12 Months</option>
                <option value="2">24 Months</option>
                <option value="3">36 Months</option>
                <option value="4">48 Months</option>
                <option value="5">60 Months</option>
                <option value="6">72 Months</option>
              </select>
            </div>
            <div>
              <h4>Rate</h4>
              <select onChange={this.rateHandler}>
                <option value="0.0099">0.99 %</option>
                <option value="0.0199">1.99 %</option>
                <option value="0.0299">2.99 %</option>
                <option value="0.0399">3.99 %</option>
                <option value="0.0499">4.99 %</option>
                <option value="0.0599">5.99 %</option>
              </select>
            </div>
            <div>
              <input type="submit" value="Calculator" className="calculator" />
            </div>
          </form>

          <h3>Estimated Payment </h3>
          <h2>
            {" "}
            $ {Math.round((this.state.yearlyCost * 100) / 12) / 100} /{" "}
            <span>month</span>
          </h2>
        </div>
        <form onSubmit={this.proceedToCheckout} className="checkout_form">
          <h4>Credit Card</h4>
          <div className="section">
            <input type="text" placeholder="Card Number" />
          </div>
          <div className="section">
            <input type="text" placeholder="Cardholder name" />
          </div>
          <div className="last_section">
            <div className="item">
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="item">
              <input type="text" placeholder="CVV" />
            </div>
          </div>
          <div className="checkout-btn">
            <input type="submit" value="PAY" />
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
