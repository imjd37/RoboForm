import React from "react";
import "./Card.css";

function Card({ name, email, id }) {


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
          alert("your data delete successfully");
          window.location.reload();
        } else {
          alert("This email is not registered");
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
