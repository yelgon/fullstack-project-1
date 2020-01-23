import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post.jsx";
// import { Route, BrowserRouter, Link } from "react-router-dom";
// import Navbar from "./Navbar.jsx";
// import Detail from "./Detail.jsx";
// import Sell from "./Sell.jsx";

class UnconnectedContent extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], allPosts: [], posts: [] };
  }
  componentDidMount = async () => {
    let response = await fetch("/all-posts");
    let body = await response.text();
    console.log("/all-posts response", body);
    body = JSON.parse(body);
    this.setState({ allPosts: body });
  };
  logout = () => {
    this.props.dispatch({ type: "logout" });
  };
  loadAll = () => {
    this.setState({ posts: this.state.allPosts });
  };
  loadHonda = () => {
    let honda = this.state.allPosts.filter(e => e.brand === "honda");
    this.setState({ posts: honda });
  };
  loadDucati = () => {
    let ducati = this.state.allPosts.filter(e => e.brand === "ducati");
    this.setState({ posts: ducati });
  };
  loadHarleyDavidson = () => {
    let harleyDavidson = this.state.allPosts.filter(
      e => e.brand === "harleyDavidson"
    );
    this.setState({ posts: harleyDavidson });
  };
  loadYamaha = () => {
    let yamaha = this.state.allPosts.filter(e => e.brand === "yamaha");
    this.setState({ posts: yamaha });
  };
  loadSuzuki = () => {
    let suzuki = this.state.allPosts.filter(e => e.brand === "suzuki");
    this.setState({ posts: suzuki });
  };
  loadAprilia = () => {
    let aprilia = this.state.allPosts.filter(e => e.brand === "aprilia");
    this.setState({ posts: aprilia });
  };
  loadBmw = () => {
    let bmw = this.state.allPosts.filter(e => e.brand === "bmw");
    this.setState({ posts: bmw });
  };
  loadKawasaki = () => {
    let kawasaki = this.state.allPosts.filter(e => e.brand === "kawasaki");
    this.setState({ posts: kawasaki });
  };

  render() {
    return (
      <div>
        <button onClick={this.logout}> LOGOUT</button>

        <div>
          <button onClick={this.loadAll}> Show All </button>
          <button onClick={this.loadHonda}> HONDA </button>
          <button onClick={this.loadDucati}> DUCATI </button>
          <button onClick={this.loadYamaha}> YAMAHA </button>
          <button onClick={this.loadSuzuki}> SUZUKI </button>
          <button onClick={this.loadAprilia}> APRILIA </button>
          <button onClick={this.loadBmw}> BMW </button>
          <button onClick={this.loadKawasaki}> KAWASAKI </button>
          <button onClick={this.loadHarleyDavidson}>HALRLEY DAVIDSON</button>
        </div>
        <div>
          {this.state.posts.map(p => (
            <Post key={p._id} contents={p} />
          ))}
        </div>
      </div>
    );
  }
}
let Content = connect()(UnconnectedContent);
export default Content;
