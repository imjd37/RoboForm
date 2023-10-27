import React, { useState, useEffect, useContext } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { UserContext } from "../../App";




function Home() {
  const { state } = useContext(UserContext);


  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("http://localhost:2000/show")
      .then((res) => res.json())
      .then((users) => {
        setRobots(users);
      });

  }, [state]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>RoboFriend</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default Home;
