import React from "react";
import "./Dashboard.css";
import { Sidebar } from "../Sidebar/Sidebar";
import { Calendar } from "../Calendar/Calendar";
import { Header } from "../Header/Header";
import { Bottom } from "../Bottom/Bottom";
import { Notes } from "../Notes/Notes";

export function Dashboard(props) {
  return (
    <div id="dash">
      <Sidebar />
      <div id="dash-main">
        <Header />
        <div id="main-main">
          <Calendar />
          <Notes />
        </div>
        <Bottom />
      </div>
    </div>
  );
}
