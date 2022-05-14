import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Event } from "./pages/Event/Event";
import { Login } from "./pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

export const GlobalState = createContext({
  state: { events: [], user: {} },
  setState: (state) => {
    console.log("new state", state);
    return state;
  },
});

function App() {
  const [state, setState] = useState({
    events: [],
    user: {},
  });

  useEffect(() => {
    if (state.user && state.user.id) {
      fetch(
        (process.env.REACT_APP_API || "https://ada-lovet.herokuapp.com/") +
          "events"
      )
        .then((response) => response.json())
        .then((data) => {
          setState({
            ...state,
            events: data,
          });
          console.log(data);
        });
    }
  }, [state.user]);

  return (
    <div className="App">
      <GlobalState.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="event" element={<Event />} />
            <Route path="event/:id" element={<Event />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </GlobalState.Provider>
    </div>
  );
}

export default App;
