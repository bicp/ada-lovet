import React from "react";
import "./Bottom.css";
import Calendar from "./calendar.svg";
import Megaphone from "./electric_megaphone.svg";

export function Bottom(props) {
  return (
    <div id="main-bottom">
      {props.items.map(function (item) {
        return (
          <div id="icon1">
            <img src={item.icon === "calendar" ? Calendar : Megaphone} alt="" />
            <div>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}
