import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Intro />
      <br />
      <Projects />
      <br />
      <About />
      <br />
      <Contact />
      <br />
    </div>
  );
}

export default App;
