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
          <div id="icon1" key={item._id}>
            <img src={item.icon === "calendar" ? Calendar : Megaphone} alt="" />
            <div
              onClick={() => {
                navigate(`/event/${item._id}`);
              }}
            >
              {item.content}
            </div>
            {/* <h2>{item.id}</h2> */}

            {item.userId === context.state.user.id ? (
              <button
                onClick={(evt) => {
                  evt.preventDefault();

                  console.log(item);
                  const requestOptions = {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                  };
                  fetch(
                    `${
                      (process.env.REACT_APP_API ||
                        "https://ada-lovet.herokuapp.com/") + "events/"
                    }${item._id}`,
                    requestOptions
                  )
                    .then((response) => response.json())
                    .then((data) => {
                      context.setState({
                        ...context.state,
                        events: context.state.events.filter((event) => {
                          return event._id !== item._id;
                        }),
                      });
                      navigate("/dashboard");
                    });
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
