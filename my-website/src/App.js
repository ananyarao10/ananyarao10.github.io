import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./style/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link smooth to="#home">HOME</Link>
          <Link smooth to="#about">ABOUT</Link>
          <Link smooth to="#experience">EXPERIENCE</Link>
          <Link smooth to="#skills">SKILLS</Link>
          {/* <Link smooth to="#projects">PROJECTS</Link> */}
          <Link smooth to="#contact">CONTACT ME</Link>
        </nav>

        <div className="sections">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          {/* <section id="projects">
            <Projects />
          </section> */}
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;
