import React,{useContext} from "react";
import "./Navigation.css";
import { NavLink, Outlet} from "react-router-dom";
import { UserContext } from "../../App";


function Navigation() {

  const {state} = useContext(UserContext)
  // , dispatch

  

  console.log(state);
 
  if(state){
    return(
      <>
      <header className="navigationBar">
        <p><NavLink to={"/"}>Sign Out</NavLink></p>
      </header>
      <Outlet />
    </>
    )
    
  }
  else{
    return(
      <>
      <header className="navigationBar">
        <p><NavLink to={"/"}>Sign In</NavLink></p>
        <p><NavLink to={"/signUp"}>Sign Up</NavLink></p>
      </header>
      <Outlet />
    </>
    )
  
  }

  // return (
  //   <>
  //     <header className="navigationBar">
  //       <p><NavLink to={"/"}>Sign In</NavLink></p>
  //       <p><NavLink to={"/signUp"}>Sign Up</NavLink></p>
  //       <p><NavLink to={"/"}>Sign Out</NavLink></p>
  //     </header>
  //     <Outlet />
  //   </>
  // );
}

export default Navigation;
