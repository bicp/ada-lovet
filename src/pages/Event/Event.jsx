import React from "react";
import "./Event.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Header } from "../../components/Header/Header";
import { Bottom } from "../../components/Bottom/Bottom";
import { Calendar } from "../../components/Calendar/Calendar";
import { EventEdit } from "../../components/EventEdit/EventEdit";

export function Event(props) {
  const items = [
    { icon: "calendar", text: "" },
    {
      icon: "megaphone",
      text: "",
    },
  ];
  return (
    <div id="dash">
      <Sidebar />
      <div id="dash-main">
        <Header />
        <div id="main-main">
          {/* <Calendar /> */}
          <EventEdit />
        </div>
        {/* <Bottom items={items} /> */}
      </div>
    </div>
  );
}
