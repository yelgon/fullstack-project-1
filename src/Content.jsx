import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Post from "./Post.jsx";
import Details from "./Details.jsx";
import Sell from "./Sell.jsx";
import Cart from "./Cart.jsx";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { totalCost: 0, cart: [], allPosts: [], posts: [] };
  }

  componentDidMount = async () => {
    let response = await fetch("/all-posts");
    let body = await response.text();
    console.log("/all-posts response", body);
    body = JSON.parse(body);
    this.setState({ allPosts: body });
    this.loadAll();
  };
  addToCart = item => {
    this.setState({
      totalCost: this.state.totalCost + parseInt(item.price, 10)
    });
    this.setState({ cart: this.state.cart.concat(item) });
  };

  removeItem = idx => {
    const cartCopy = this.state.cart.slice();
    cartCopy.splice(idx, 1);
    this.setState({ cart: cartCopy });
  };
  renderItemDetails = routerData => {
    const modelName = routerData.match.params.model;
    const model = this.state.allPosts.find(e => e.model === modelName);
    if (model === undefined) {
      return <div>Can not find model</div>;
    }
    return <Details model={model} addToCart={this.addToCart} />;
  };
  renderSell = () => {
    return <Sell />;
  };
  renderCart = () => {
    return (
      <Cart
        cart={this.state.cart}
        removeItem={this.removeItem}
        total={this.state.totalCost}
      />
    );
  };
  renderAllItems = () => {
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
  };
  handleQuery = event => {
    let query = event.target.value;
    this.setState({
      posts: this.state.allPosts.filter(item => {
        return item.brand.includes(query) || item.model.includes(query);
      })
    });
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
      e => e.brand === "harley-davidson"
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
      <BrowserRouter>
        <div>
          <Navbar cartSize={this.state.cart.length} />
          <Route exact={true} path="/" render={this.renderAllItems} />
          <Route exact={true} path="/cart" render={this.renderCart} />
          <Route exact={true} path="/checkout" render={this.renderCheckout} />
          <Route exact={true} path="/sell" render={this.renderSell} />
          <Route
            exact={true}
            path="/detail/:model"
            render={this.renderItemDetails}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Content;
