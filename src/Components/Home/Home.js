import React, { useState, useEffect, useContext } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { UserContext } from "../../App";

// export UserContext = createContext;

function Home() {
  const { state, dispatch } = useContext(UserContext);
  dispatch({ type: "USER", payload: true });

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);
  console.log(state);
  // setState(state+1)

  useEffect(() => {
    fetch("http://localhost:2000/show")
      .then((res) => res.json())
      .then((users) => {
        setRobots(users);
      });
    console.log(state);
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
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default Home;
