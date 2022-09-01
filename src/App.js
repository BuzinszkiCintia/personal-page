import "./App.css";
import Home from "./components/Home/Home";
import MiddleNavbar from "./components/MiddleNavbar/MiddleNavbar";
import Information from "./components/Information/Information";

function App() {
  return (
    <div className="App">
      <Home />
      <MiddleNavbar />
      <Information />
    </div>
  );
}

export default App;
