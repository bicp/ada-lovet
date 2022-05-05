import React, { useContext, useState } from "react";
import "./Dashboard.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Calendar } from "../../components/Calendar/Calendar";
import { Header } from "../../components/Header/Header";
import { Bottom } from "../../components/Bottom/Bottom";
import { Notes } from "../../components/Notes/Notes";
import { GlobalState } from "../../App";

export function Dashboard(props) {
  const [items, setItems] = useState([]);
  const context = useContext(GlobalState);

  return (
    <div id="dash">
      <Sidebar />
      <div id="dash-main">
        <Header />
        <div id="main-main">
          <Calendar />
          <Notes />
        </div>
        <Bottom items={context.state.events} />
      </div>
    </div>
  );
}
