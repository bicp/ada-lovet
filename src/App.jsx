import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Event } from "./components/EventEdit/Event";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      {/* {<Dashboard></Dashboard>} */}
      {/* {<Login></Login>} */}
      {<Event></Event>}
    </div>
  );
}

export default App;
