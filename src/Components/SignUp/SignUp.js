import React from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../reducer/userDetailSlice";


function SignUp() {
  const schema = yup.object().shape({
    userName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
  });

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
   
  const onSubmit = (data) => {
    console.log(data.email)
    dispatch(createUser(data))
      // navigate('/home');
  
    
  }
  return (
    <>
      <div className="register">
        <h1>Registration Form</h1>
        <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label>Name</label>
          <input
            type="text"
            name="userName"
            className="userName"
            placeholder="Enter your name here.."
            {...register("userName")}
          />
          <p>{errors.userName?.message}</p>
          </div>
          <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="enter your email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          </div>
          <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="password"
            placeholder="create password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          </div>
          <button type="submit">
            Register
          </button>
        </form>
      </div>
     
    </>  
  );
}

export default SignUp;
