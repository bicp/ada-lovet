import React, { useState } from "react";
import "./Login.css";
import AdaImg from "./ada-lovet.png";
import AdaLogo from "./ada-logo.png";
import { useNavigate } from "react-router-dom";

export function Login(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

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
            onSubmit={function (evt) {
              evt.preventDefault();
              console.log(userName);
              if (userName.indexOf(".com") === -1) {
                console.log("Please submit a valid email.");
              }
              console.log(passWord);
              console.log({ userName: userName, passWord: passWord });
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  userName: userName,
                  passWord: passWord,
                }),
              };
              fetch("http://localhost:4001/login", requestOptions).then(
                (response) => navigate("/")
              );
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
              <button id="login-btn" type="submit">
                Login
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
