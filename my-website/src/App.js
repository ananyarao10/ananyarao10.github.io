import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./style/App.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/experience">EXPERIENCE</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/contact">CONTACT ME</Link>
      </nav>
      <div className="sections">
        <div id="Home">
          <Home />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Experience">
          <Experience />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="ContactMe">
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
