import React, { useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { useSelector, useDispatch } from "react-redux";
import { setSearchField } from "../../reducer/actions";
import { showUser } from "../../reducer/userDetailSlice";

function Home() {
  const { users, loading } = useSelector((state) => state.app);

  const searchField = useSelector((state) => state.searchRobots.searchField);
  const dispatchSend = useDispatch((state) => state.searchRobots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const filterRobots = users.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (loading) {
    return (
      <div className="tc">
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <div className="tc">
      <h1>RoboFriend</h1>
      <SearchBox
        searchChange={(event) =>
          dispatchSend(setSearchField(event.target.value))
        }
      />
      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default Home;
