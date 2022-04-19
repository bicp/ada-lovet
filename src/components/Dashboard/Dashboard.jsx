import React from "react";
import "./Dashboard.css";
import AdaIcon from "./ada-icon.png";
import Door from "./export.svg";

export function Dashboard(props) {
  return (
    <div id="dash">
      <div id="dash-sidebar">
        <div id="side-icon">
          <img src={AdaIcon} alt="" />
          <h1 id="side-txt">Welcome, Ada &#x1F44B;</h1>
        </div>
        <div id="sidebar-btn">
          <button id="btn-create-evt">Create Event</button>
        </div>
        <div id="sidebar-out">
          <button id="door-btn">
            <img id="door-icon" src={Door} alt="door icon" />
            <h1 id="out-txt">Logout</h1>
          </button>
        </div>
      </div>
      <div id="dash-main">
        <div id="main-header">
          <div id="btn-div">
            <button id="header-btn">Any subject</button>
            <button id="header-btn">Any Distance</button>
            <button id="header-btn">Reset Filters</button>
          </div>
          <div id="input-div">
            <input id="hearder-search" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  );
}
