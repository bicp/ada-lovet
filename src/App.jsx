import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      {<Dashboard></Dashboard>}
      {/* {<Login></Login>} */}
    </div>
  );
}

export default App;
