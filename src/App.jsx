import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Navbar/>

        <div 
          className="flex-1 overflow-hidden"
        >
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
};

export default App;
