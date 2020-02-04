import React, { Component } from "react";
import styled from "styled-components";
const Bigbox = styled.div`
  text-align: center;
  justify-content: center;
  margin: 20px;
  background: orange;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  justify-content: center;
  margin: 5px;
  display: flex;
  background: white;
  border: 1px solid black;
`;
const SecondBox1 = styled.div`
  margin: 20px;
  padding-right: 20px;
  text-align: left;
  input {
    height: 18px;
    width: 250px;
    margin: 5px;
    padding-left: 5px;
  }
`;
const SecondBox2 = styled.div`
  margin: 20px;
  input {
    height: 40px;
    width: 250px;
    margin: 5px;
  }
  .upload {
    background: orange;
    box-shadow: 2px 2px black;
  }
`;
const Spec = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const ImagePreview = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

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
      description: "",
      file: "",
      previewImg: null
    };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    const data = new FormData();
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
    alert("Your item uploaded success");
    this.props.history.push("/");
  };

  fileChangeHandler = event => {
    this.setState({
      file: event.target.files[0],
      previewImg: URL.createObjectURL(event.target.files[0])
    });
  };

  eventChangeHandler = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  render = () => {
    const inputName = [
      "brand",
      "model",
      "year",
      "price",
      "displacement",
      "cylinders",
      "cooling",
      "power",
      "torque",
      "seatHeight",
      "weight",
      "description"
    ];
    return (
      <Bigbox>
        <form onSubmit={this.handleSubmit}>
          <Wrapper>
            <SecondBox1>
              {inputName.map(name => {
                return (
                  <div>
                    <div>
                      <Spec>{name}</Spec>
                    </div>
                    <input onChange={e => this.eventChangeHandler(e, name)} />
                  </div>
                );
              })}
            </SecondBox1>
            <SecondBox2>
              <div>
                <input type="file" onChange={this.fileChangeHandler} />
                <ImagePreview>
                  <img
                    height="250px"
                    src={this.state.previewImg}
                    className="image-preview__image"
                  />
                </ImagePreview>
              </div>
              <input type="submit" value="UPLOAD" className="upload" />
            </SecondBox2>
          </Wrapper>
        </form>
      </Bigbox>
    );
  };
}
export default Sell;
