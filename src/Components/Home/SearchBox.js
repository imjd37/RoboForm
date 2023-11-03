import React from "react";
import { useSelector } from "react-redux";

function SearchBox({ searchChange }) {
  const allUsers = useSelector((state) => state.app.users);

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder={"Search in " + allUsers.length + " Robots.."}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
