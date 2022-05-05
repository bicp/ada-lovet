import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Event } from "./pages/Event/Event";
import { Login } from "./pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const GlobalState = createContext({
  state: { events: [] },
  setState: (state) => state,
});

function App() {
  const [state, setState] = useState({
    events: [
      {
        id: 1,
        title: "title 1",
        content: "content 1",
        date: "2022-05-14T20:26",
        location: "location 1",
      },
      {
        id: 2,
        title: "title 2",
        content: "content 2",
        date: "2022-05-14T20:26",
        location: "location 2",
      },
    ],
  });

  return (
    <div className="App">
      <GlobalState.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="event" element={<Event />} />
            <Route path="event/:id" element={<Event />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </GlobalState.Provider>
    </div>
  );
}

export default App;
