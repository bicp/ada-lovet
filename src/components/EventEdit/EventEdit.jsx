import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GlobalState } from "../../App";
import "./EventEdit.css";

export function EventEdit(props) {
  const navigate = useNavigate();
  const context = useContext(GlobalState);
  const params = useParams();
  const event = getEvent(params.id);

  const [title, setTitle] = useState(event.title);
  const [content, setContent] = useState(event.content);
  const [local, setLocal] = useState(event.local);
  const [date, setDate] = useState(event.date);

  function getEvent(id) {
    const result = context.state.events.find((evt) => evt._id == id) || {
      title: "",
      date: "",
      content: "",
      location: "",
    };

    return result;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <form
        id="event-edit"
        onSubmit={function (evt) {
          evt.preventDefault();

          if (event._id !== undefined) {
            const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: title,
                content: content,
                local: local,
                date: date,
                userId: context.state.user.id,
              }),
            };
            fetch(
              `${
                (process.env.REACT_APP_API ||
                  "https://ada-lovet.herokuapp.com/") + "events/"
              }${event._id}`,
              requestOptions
            )
              .then((response) => response.json())
              .then((data) => {
                context.setState({
                  ...context.state,
                  events: context.state.events.map((event) => {
                    if (event._id === data._id) {
                      return data;
                    } else {
                      return event;
                    }
                  }),
                });
                navigate("/dashboard");
              });
          } else {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: title,
                content: content,
                local: local,
                date: date,
                userId: context.state.user.id,
              }),
            };
            fetch(
              (process.env.REACT_APP_API ||
                "https://ada-lovet.herokuapp.com/") + "events",
              requestOptions
            )
              .then((response) => response.json())
              .then((data) => {
                context.setState({
                  ...context.state,
                  events: [...context.state.events, data],
                });
                navigate("/dashboard");
              });
          }
        }}
      >
        {/* <input
          id="event-edit-id"
          // type="text"
          placeholder="ID"
          value={event.id}
        /> */}
        <input
          id="event-edit-title"
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />
        <input
          id="event-edit-date"
          type="datetime-local"
          value={date}
          required
          onChange={(evt) => {
            setDate(evt.target.value);
          }}
        />
        <input
          id="event-edit-content"
          type="textarea"
          value={content}
          required
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
        />
        <input
          id="event-edit-local"
          type="text"
          placeholder="Location"
          value={local}
          required
          onChange={(evt) => {
            setLocal(evt.target.value);
          }}
        />
        <div id="event-edit-btn">
          <button id="event-edit-save" type="submit">
            Save
          </button>
        </div>
      </form>
      <button
        id="event-edit-cancel"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Cancel
      </button>
    </div>
  );
}
