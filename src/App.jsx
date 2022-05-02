import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Event } from "./pages/Event/Event";
import { Login } from "./pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="event" element={<Event />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
