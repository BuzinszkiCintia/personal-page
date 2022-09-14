import "./App.css";
import Home from "./components/Home/Home";
import MiddleNavbar from "./components/MiddleNavbar/MiddleNavbar";
import Information from "./components/Information/Information";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <MiddleNavbar />
      <Information />
      <WorkExperience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
