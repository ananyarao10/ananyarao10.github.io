import React from "react";
import headshot from "../../src/images/headshot.jpg";
import "../style/About.css"

const About = () => {
  return (
    <div className="section">
      <h1>About</h1>
      <div className="about-container">
        <img className="headshot" src={headshot} width="600" alt="professional"/>
        <p className="description">Hi, my name is Ananya and I'm a junior at Rice University majoring in Computer Science with a minor in Data Science at Rice University. <br></br> <br></br> As an aspiring software engineer, I'm passionate about creating innovative solutions that combine technical innovation with user-centric design. I am dedicated to driving meaningful change through technology and am eager to explore opportunities in this dynamic field. <br></br> <br></br> In my free time I love hiking, running, </p>
      </div>
    </div>
  );
};

export default About;
