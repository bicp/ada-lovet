import React, { useContext } from "react";
import "./Sidebar.css";
import AdaIcon from "./ada-icon.png";
import Door from "./export.svg";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../../App";

export function Sidebar(props) {
  const context = useContext(GlobalState);
  const navigate = useNavigate();

  return (
    <div id="dash-sidebar">
      <div id="side-icon">
        <img src={AdaIcon} alt="" />
        <h1 id="side-txt">
          Welcome, {context.state.user?.email?.split("@")[0]} &#x1F44B;
        </h1>
      </div>
      <div id="sidebar-btn">
        <Link to={"/event"}>
          <button id="btn-create-evt">Create Event</button>
        </Link>
      </div>

      <div id="sidebar-out">
        <button
          id="door-btn"
          onClick={function () {
            context.setState({ events: [], user: {} });
            navigate("/");
          }}
        >
          <img id="door-icon" src={Door} alt="door icon" />
          <h1 id="out-txt">Logout</h1>
        </button>
      </div>
    </div>
  );
}
