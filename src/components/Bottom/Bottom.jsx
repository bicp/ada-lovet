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
                const requestOptions = {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                };
                fetch(`http://localhost:4001/events/${item.id}`, requestOptions)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    console.log([...context.state.events, data]);
                    context.setState({
                      ...context.state,
                      events: data,
                    });
                    navigate("/");
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
