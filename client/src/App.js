import "./App.css";
import "./Screens/Home/Home";
import { Route } from "react-router-dom";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
