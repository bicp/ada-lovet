import React, { useContext, useState } from "react";
import "./Login.css";
import AdaImg from "./ada-lovet.png";
import AdaLogo from "./ada-logo.png";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../App";

export function Login(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

  const context = useContext(GlobalState);

  console.log("VAAAI ", process.env.REACT_APP_API);

  const signup = (evt) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: passWord,
      }),
    };
    fetch(
      (process.env.REACT_APP_API || "https://ada-lovet.herokuapp.com/") +
        "login",
      requestOptions
    ).then((response) => {
      context.setState({
        ...context.state,
        user: {
          id: response.id,
          email: response.email,
        },
      });
      navigate("/dashboard");
    });
  };

  const login = function (evt) {
    evt.preventDefault();

    console.log(userName);
    if (userName.indexOf(".com") === -1) {
      console.log("Please submit a valid email.");
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: passWord,
      }),
    };
    fetch(
      (process.env.REACT_APP_API || "https://ada-lovet.herokuapp.com/") +
        "login",
      requestOptions
    )
      .then((r) => r.json())
      .then((response) => {
        console.log("RESPONSEEE", response);
        context.setState({
          ...context.state,
          user: {
            id: response.id,
            email: response.email,
          },
        });
        navigate("/dashboard");
      });
  };

  return (
    <div id="login">
      <div id="login-form">
        <div id="ada-logo">
          <img src={AdaLogo} alt="" />
          <h1>
            Ada <br /> LoveTech
          </h1>
        </div>
        <h1 id="logotxt">
          This is your opportunity to connect to other women in technology and
          change your life!
        </h1>
        <div id="form-input">
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Username"
              required
              value={userName}
              onChange={(evt) => {
                setUserName(evt.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={passWord}
              minLength={4}
              onChange={(evt) => {
                setPassWord(evt.target.value);
              }}
            />
            <div id="login-btn-wrap">
              <button id="login-btn" type="submit" onClick={login}>
                Login
              </button>

              <button id="signup-btn" type="submit" onClick={signup}>
                Sign Up
              </button>

              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
      <div id="login-img">
        <img src={AdaImg} alt="" />
      </div>
    </div>
  );
}
