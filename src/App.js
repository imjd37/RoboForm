import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import "tachyons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/Usereduser";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
