import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GlobalState } from "../../App";
import "./EventEdit.css";

export function EventEdit(props) {
  const navigate = useNavigate();
  const context = useContext(GlobalState);
  const params = useParams();

  const [title, setTitle] = useState(getEvent(params.id).title);
  const [content, setContent] = useState(getEvent(params.id).content);
  const [local, setLocal] = useState(getEvent(params.id).local);
  const [date, setDate] = useState(getEvent(params.id).date);

  function getEvent(id) {
    const result = context.state.events.find((evt) => evt.id == id) || {
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
          console.log({
            title: title,
            content: content,
            local: local,
            date: date,
          });
          context.setState({
            ...context.state,
            events: [
              ...context.state.events,
              {
                id: context.state.events.length + 1,
                title: title,
                content: content,
                local: local,
                date: date,
              },
            ],
          });
          navigate("/");
        }}
      >
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
          navigate("/");
        }}
      >
        Cancel
      </button>
    </div>
  );
}
