import React, { Component } from "react";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { yearlyCost: 0, terms: 1, rate: 0.0099, monthlyPayment: 0 };
  }
  termHandler = event => {
    this.setState({ terms: parseInt(event.target.value, 10) }, () =>
      console.log(this.state.yearlyCost)
    );
  };
  rateHandler = event => {
    this.setState({ rate: parseFloat(event.target.value, 10) }, () =>
      console.log(this.state.yearlyCost)
    );
  };
  submitHandler = () => {
    event.preventDefault();
    this.setState({
      yearlyCost:
        (this.props.totalCost *
          Math.pow(1 + this.state.rate, this.state.terms) *
          this.state.rate) /
        (Math.pow(1 + this.state.rate, this.state.terms) - 1),
      monthlyPayment: this.state.yearlyCost
    });
  };
  render() {
    return (
      <div>
        <h2>Total Price : $ {this.props.totalCost} </h2>
        <form onSubmit={this.submitHandler}>
          <div className="payment-option">
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
            <input type="submit" value="Calculate" />
          </div>
        </form>

        <h2>
          Monthly payment : $ {Math.round(this.state.monthlyPayment / 12)}
        </h2>
        <div className="payment-box">
          <form onSubmit={this.submitHandler}>
            <h4>Credit Card</h4>
            <input placeholder="Card Number" />
            <input placeholder="MM" />
            <input placeholder="YY" />
            <input placeholder="CVV" />
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout;
