import "./App.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Event } from "./pages/Event/Event";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <Dashboard></Dashboard> */}
      {/* {<Login></Login>} */}
      <Event></Event>
    </div>
  );
}

export default App;
