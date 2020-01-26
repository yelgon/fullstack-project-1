import React, { Component } from "react";

class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      year: "",
      price: "",
      displacement: "",
      cylinders: "",
      cooling: "",
      power: "",
      torque: "",
      seatHeight: "",
      weight: "",
      file: "",
      description: ""
    };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    let data = new FormData();
    data.append("img", this.state.file);
    data.append("brand", this.state.brand);
    data.append("model", this.state.model);
    data.append("year", this.state.year);
    data.append("price", this.state.price);
    data.append("displacement", this.state.displacement);
    data.append("cylinders", this.state.cylinders);
    data.append("cooling", this.state.cooling);
    data.append("power", this.state.power);
    data.append("torque", this.state.torque);
    data.append("seatHeight", this.state.seatHeight);
    data.append("weight", this.state.weight);
    data.append("description", this.state.description);
    fetch("/new-post", { method: "POST", body: data });
  };
  fileChangeHandler = event => {
    this.setState({ file: event.target.files[0] });
  };
  brandChangeHandler = event => {
    this.setState({ brand: event.target.value });
  };
  modelChangeHandler = event => {
    this.setState({ model: event.target.value });
  };
  yearChangeHandler = event => {
    this.setState({ year: event.target.value });
  };
  priceChangeHandler = event => {
    this.setState({ price: event.target.value });
  };
  displacementChangeHandler = event => {
    this.setState({ displacement: event.target.value });
  };
  cylindersChangeHandler = event => {
    this.setState({ cylinders: event.target.value });
  };
  coolingChangeHandler = event => {
    this.setState({ cooling: event.target.value });
  };
  powerChangeHandler = event => {
    this.setState({ power: event.target.value });
  };
  torqueChangeHandler = event => {
    this.setState({ torque: event.target.value });
  };
  seatHeightChangeHandler = event => {
    this.setState({ seatHeight: event.target.value });
  };
  weightChangeHandler = event => {
    this.setState({ weight: event.target.value });
  };
  descriptionChangeHandler = event => {
    this.setState({ description: event.target.value });
  };
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Brand
          <input type="text" onChange={this.brandChangeHandler} />
        </div>
        <div>
          Model
          <input type="text" onChange={this.modelChangeHandler} />
        </div>
        <div>
          Year
          <input type="text" onChange={this.yearChangeHandler} />
        </div>
        <div>
          Price
          <input type="text" onChange={this.priceChangeHandler} />
        </div>
        <div>
          Displacement
          <input type="text" onChange={this.displacementChangeHandler} />
        </div>
        <div>
          Cylinders
          <input type="text" onChange={this.cylindersChangeHandler} />
        </div>
        <div>
          Cooling
          <input type="text" onChange={this.coolingChangeHandler} />
        </div>
        <div>
          Power
          <input type="text" onChange={this.powerChangeHandler} />
        </div>
        <div>
          Torque
          <input type="text" onChange={this.torqueChangeHandler} />
        </div>
        <div>
          Seat Height
          <input type="text" onChange={this.seatHeightChangeHandler} />
        </div>
        <div>
          Weight
          <input type="text" onChange={this.weightChangeHandler} />
        </div>
        <div>
          Description
          <input
            type="text"
            onChange={this.descriptionChangeHandler}
            className="description"
          />
        </div>
        <div>
          upload picture
          <input type="file" onChange={this.fileChangeHandler} />
        </div>
        <input type="submit" value="UPLOAD" />
      </form>
    );
  };
}
export default Sell;
