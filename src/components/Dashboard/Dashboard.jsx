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
            <button>Any subject</button>
            <button>Any Distance</button>
            <button>Reset Filters</button>
          </div>
          <div id="input-div">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div id="main-main">
          <div id="main-calendar">calendar</div>
          <div id="main-notes">notes</div>
        </div>
        <div id="main-bottom">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
}
