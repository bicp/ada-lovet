import React from "react";
import "./Sidebar.css";
import AdaIcon from "./ada-icon.png";
import Door from "./export.svg";
import { Link } from "react-router-dom";

export function Sidebar(props) {
  return (
    <div id="dash-sidebar">
      <div id="side-icon">
        <img src={AdaIcon} alt="" />
        <h1 id="side-txt">Welcome, Ada &#x1F44B;</h1>
      </div>
      <div id="sidebar-btn">
        <Link to={"/event"}>
          <button id="btn-create-evt">Create Event</button>
        </Link>
      </div>

      <div id="sidebar-out">
        <Link to={"/login"}>
          <button id="door-btn">
            <img id="door-icon" src={Door} alt="door icon" />
            <h1 id="out-txt">Logout</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}
