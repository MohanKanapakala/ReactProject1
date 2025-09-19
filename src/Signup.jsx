import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Signup.css"; // using your style
import { useDispatch } from "react-redux";
import { registerUser } from "./store";

function Signup() {

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  

  const handleSignup = (data) => {
    dispatch(registerUser(data));
    alert("Signup successful");
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(handleSignup)}>
        <h2>Create Account</h2>

        <label>👤Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          {...register("userName", { required: "Username is required" })}
        />
        {errors.userName && (
          <p style={{ color: "red" }}>{errors.userName.message}</p>
        )}

        <label>📩Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (/[A-Z]/.test(value)) {
                return "Email must be lowercase";
              }
              if (!value.includes("@")) {
                return "Email must contain '@'";
              }
              if (!/\.[a-z]{2,}$/.test(value)) {
                return "Email must have at least 2 letters after '.'";
              }
              return true;
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <label>🔒Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must contain at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <label>🔑Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Sign Up</button>

        <p style={{ marginTop: "15px" }}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
