import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Intro } from "./components/Intro";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Intro />
    </div>
  );
}

export default App;
