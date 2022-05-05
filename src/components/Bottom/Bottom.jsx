import React from "react";
import "./Bottom.css";
import Calendar from "./calendar.svg";
import Megaphone from "./electric_megaphone.svg";
import { useContext } from "react";
import { GlobalState } from "../../App";
import { Navigate, useNavigate } from "react-router-dom";

export function Bottom(props) {
  const context = useContext(GlobalState);
  const navigate = useNavigate();

  return (
    <div id="main-bottom">
      {props.items.map(function (item) {
        return (
          <div
            id="icon1"
            onClick={() => {
              navigate(`/event/${item.id}`);
            }}
            key={item.id}
          >
            <img src={item.icon === "calendar" ? Calendar : Megaphone} alt="" />
            <div>{item.content}</div>
            <h2>{item.id}</h2>
            <button
              onClick={(evt) => {
                context.setState({
                  events: context.state.events.filter((event) => {
                    return event.id !== item.id;
                  }),
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
