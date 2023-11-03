import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../reducer/userDetailSlice";

function Card({ name, email, id }) {
  const dispatch = useDispatch();
  var deleteEmail = {
    email: email,
  };

  return (
    <div className="bg-light-green dib ma2 pa3 br3 grow shadow-5 ">
      <img alt="robot" src={`https://robohash.org/${id}?size=150x150`} />
      <button
        onClick={() => dispatch(deleteUser(deleteEmail))}
        className="delete"
      >
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
