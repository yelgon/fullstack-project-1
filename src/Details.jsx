import React, { Component } from "react";
import { Link } from "react-router-dom";

class Details extends Component {
  addToCart = () => {
    this.props.addToCart(this.props.model);
  };
  render() {
    const {
      brand,
      model,
      year,
      price,
      displacement,
      cylinders,
      cooling,
      power,
      torque,
      seatHeight,
      weight,
      description,
      frontendPath
    } = this.props.model;
    return (
      <div>
        <img height="100px" src={frontendPath} />
        <h1>{model}</h1>
        <ol>
          <li>BRAND: {brand}</li>
          <li>YEAR: {year}</li>
          <li>PRICE: {price}</li>
          <li>DISPLACEMENT: {displacement}</li>
          <li>CYCLINDERS: {cylinders}</li>
          <li>COOLING SYSTEM: {cooling}</li>
          <li>POWER: {power}</li>
          <li>TORQUE: {torque}</li>
          <li>SEAT HEIGHT: {seatHeight}</li>
          <li>WEIGHT: {weight}</li>
          <li>DESCIPTION: {description}</li>
        </ol>
        <button onClick={this.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

export default Details;
