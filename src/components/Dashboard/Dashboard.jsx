import React from "react";
import "./Dashboard.css";
import AdaIcon from "./ada-icon.png";

export function Dashboard(props) {
  return (
    <div id="dash">
      <div id="dash-sidebar">
        <div id="side-icon">
          <img src={AdaIcon} alt="" />
          <h1 id="side-txt">Welcome, Ada &#x1F44B;</h1>
        </div>
        <div id="side-btn"></div>
        <div id="side-out"></div>
      </div>
      <div id="dash-main"></div>
    </div>
  );
}
