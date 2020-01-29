import React, { Component } from "react";
import Post from "./Post.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  handleQuery = event => {
    let query = event.target.value;
    this.setState({
      posts: this.props.allPosts.filter(item => {
        return item.brand.includes(query) || item.model.includes(query);
      })
    });
  };
  loadAll = () => {
    this.setState({ posts: this.props.allPosts });
  };
  loadHonda = () => {
    let honda = this.props.allPosts.filter(e => e.brand === "honda");
    this.setState({ posts: honda });
  };
  loadDucati = () => {
    let ducati = this.props.allPosts.filter(e => e.brand === "ducati");
    this.setState({ posts: ducati });
  };
  loadHarleyDavidson = () => {
    let harleyDavidson = this.props.allPosts.filter(
      e => e.brand === "harley-davidson"
    );
    this.setState({ posts: harleyDavidson });
  };
  loadYamaha = () => {
    let yamaha = this.props.allPosts.filter(e => e.brand === "yamaha");
    this.setState({ posts: yamaha });
  };
  loadSuzuki = () => {
    let suzuki = this.props.allPosts.filter(e => e.brand === "suzuki");
    this.setState({ posts: suzuki });
  };
  loadAprilia = () => {
    let aprilia = this.props.allPosts.filter(e => e.brand === "aprilia");
    this.setState({ posts: aprilia });
  };
  loadBmw = () => {
    let bmw = this.props.allPosts.filter(e => e.brand === "bmw");
    this.setState({ posts: bmw });
  };
  loadKawasaki = () => {
    let kawasaki = this.props.allPosts.filter(e => e.brand === "kawasaki");
    this.setState({ posts: kawasaki });
  };

  render() {
    return (
      <div>
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
          <input type="text" onChange={this.handleQuery}></input>
          <span>Search</span>
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
export default Home;
