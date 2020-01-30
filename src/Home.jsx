import React, { Component } from "react";
import Post from "./Post.jsx";
import styled from "styled-components";

const Search = styled.div`
  text-align: left;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const AllItem = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  margin: 0px;
  margin-left: 10px;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  display: flix;
`;
const Button = styled.div`
  .button {
    height: 150px;
  }

  padding: 10px;
`;
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
      <Wrapper>
        <div className="button">
          <button onClick={this.loadAll}> SHOW ALL </button>
          <button onClick={this.loadHonda}> HONDA </button>
          <button onClick={this.loadDucati}> DUCATI </button>
          <button onClick={this.loadYamaha}> YAMAHA </button>
          <button onClick={this.loadSuzuki}> SUZUKI </button>
          <button onClick={this.loadAprilia}> APRILIA </button>
          <button onClick={this.loadBmw}> BMW </button>
          <button onClick={this.loadKawasaki}> KAWASAKI </button>
          <button onClick={this.loadHarleyDavidson}>
            HALRLEY DAVIDSON
          </button>{" "}
        </div>
        <div>
          <Search>
            <div>
              <input
                type="text"
                className="custom-file-input"
                placeholder="Search"
                onChange={this.handleQuery}
              ></input>
            </div>
          </Search>
          <AllItem>
            {this.state.posts.map(p => (
              <Post key={p._id} contents={p} />
            ))}
          </AllItem>
        </div>
      </Wrapper>
    );
  }
}
export default Home;
