import React from "react";
import "./Event.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { Bottom } from "../Bottom/Bottom";
import { Calendar } from "../Calendar/Calendar";
import { EventEdit } from "../EventEdit/EventEdit";

export function Event(props) {
  return (
    <div id="dash">
      <Sidebar />
      <div id="dash-main">
        <Header />
        <div id="main-main">
          {/* <Calendar /> */}
          <EventEdit />
        </div>
        <Bottom />
      </div>
    </div>
  );
}
