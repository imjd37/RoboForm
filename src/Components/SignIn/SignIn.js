import React, { useContext } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "../Navigation/Navigation";
import { UserContext } from "../../App";

function SignIn() {
  const { dispatch } = useContext(UserContext);
  // state,

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:2000/signIn", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "success") {
          console.log("success");
          dispatch({ type: "USER", payload: true });
          navigate("../home");
        }
        alert(data);
      })
      .catch((data) => console.log("22", data));
  };

  return (
    <>
      <div className="SignInArea">
        <div>Login Now</div>
        <form className="SignIn" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter username.."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label>Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          <Link to={"/signUp"}>Sign Up</Link>
        </p>
      </div>
    </>
  );
}

export default SignIn;
