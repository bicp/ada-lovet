import React from "react";
import "./Dashboard.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Calendar } from "../../components/Calendar/Calendar";
import { Header } from "../../components/Header/Header";
import { Bottom } from "../../components/Bottom/Bottom";
import { Notes } from "../../components/Notes/Notes";

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
