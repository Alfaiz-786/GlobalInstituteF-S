import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Allroutes from "./Allroutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Allroutes />
      </Router>
    </>
  );
}

export default App;
