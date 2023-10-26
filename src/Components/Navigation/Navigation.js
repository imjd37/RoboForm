import React, { useContext } from "react";
import "./Navigation.css";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("../");
    dispatch({ type: "USER", payload: false });
  };
  if (state) {
    return (
      <>
        <header className="navigationBar">
          <p onClick={redirect}>Sign Out</p>
        </header>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <header className="navigationBar">
          <p>
            <NavLink to={"/"}>Sign In</NavLink>
          </p>
          <p>
            <NavLink to={"/signUp"}>Sign Up</NavLink>
          </p>
        </header>
        <Outlet />
      </>
    );
  }
}

export default Navigation;
