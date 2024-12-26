import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default App;
