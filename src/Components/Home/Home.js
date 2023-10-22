import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:2000/show")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriend</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default Home;
