import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./store";

function Account() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const { isAuthenticated } = useSelector((state) => state.authentication);

  

  const loginSuccess = (e) => {
    e.preventDefault();

    // Reset errors
    setUserNameError("");
    setPasswordError("");


    let userName = userNameRef.current.value.trim();
    let password = passwordRef.current.value.trim();

    if (!userName) {
      userNameRef.current.focus();
      setUserNameError("Please enter Username");
      return;
    }

    if (!password) {
      passwordRef.current.focus();
      setPasswordError("Please enter Password");
      return;
    }

  //   if (userName === "mohan" && password === "mohan123") {
  //     navigate("/home");
  //   } else {
  //     alert("Invalid Login Details..");
    //   }
    
    
    
    // let users = {userName,password}
    // dispatch(loginUser(users));
    dispatch(loginUser({ userName, password }));
    setTimeout(() => {
      if (isAuthenticated) {
        navigate("/home");
      }
      else {
        setPasswordError("Login failed--invalid credentials");
      }
    }, 100);
      
   
  };

    

  return (
    <div className="login-container">
      <form onSubmit={loginSuccess}>
        <h2>Login Form</h2>

        <label>Username</label>
        <input type="text" ref={userNameRef} />
        {userNameError && <p style={{ color: "red" }}>{userNameError}</p>}

        <label>Password</label>
        <input type="password" ref={passwordRef} />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Account;
