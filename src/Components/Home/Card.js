import React, { useContext } from "react";
import "./Card.css";
import { UserContext } from "../../App";

function Card({ name, email, id }) {
  const { dispatch } = useContext(UserContext);

  const onDeleteRobo = () => {
    var deleteEmail = {
      email: email,
    };

    fetch("http://localhost:2000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 1) {
          alert("your data delete successfully plz reload page");
          dispatch({ type: "DEL", payload: true });
        } else {
          alert("This email is not registered plz reload page");
        }
      });
  };

  return (
    <div className="bg-light-green dib ma2 pa3 br3 grow shadow-5 ">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <button onClick={onDeleteRobo} className="delete">
        X
      </button>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
