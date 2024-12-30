import React from "react";
import headshot from "../../src/images/headshot.jpg";
import "../style/About.css"

const About = () => {
  return (
    <div className="section">
      <h1>About</h1>
      <div className="about-container">
        <img className="headshot" src={headshot} width="600" alt="professional"/>
        <p className="description">
        My name is Ananya Rao and I'm a junior at Rice University majoring in 
        <b style={{ color: "#06D504" }}> Computer Science</b> with a minor in 
        <b style={{ color: "#FDDE42" }}> Data Science</b> at Rice University. 
        <br></br> <br></br> 
        As an aspiring <b style={{ color: "#FDDE42" }}>software engineer</b>, I’m 
        committed to developing innovative solutions that tackle real-world challenges. The dynamic innovation in and diverse applications of Computer Science inspire me, and my specific interests lie in <b style={{ color: "#06D504" }}> Cloud Computing</b>, <b style={{ color: "#FE9898" }}> Cybersecurity</b>, <b style={{ color: "#FDDE42" }}> Machine Learning</b>, and <b style={{ color: "#06D504" }}> Data Analytics</b>. 
        <br></br> <br></br> 
        Having attended the Women in Cybersecurity (<b style={{ color: "#FE9898" }}>WiCys</b>) 2024 and Grace Hopper Celebration (<b style={{ color: "#FDDE42" }}>GHC</b>) 2024 conferences, I’m passionate about fostering a <b style={{ color: "#06D504" }}> supportive</b> and <b style={{ color: "#FE9898" }}> empowering</b> community for women in Computer Science.
        <br></br> <br></br> 
        My <b style={{ color: "#FDDE42" }}> certifications</b> include AWS Cloud Practitioner Certification, ISC2 Certified in Cybersecurity, and the Texas National Registry of Emergency Medical Technicians (EMT). I'm currently working towards getting my AWS Solutions Architect Certification.
      </p>
      </div>
    </div>
  );
};

export default About;
