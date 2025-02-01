import React from "react";
import { motion } from "framer-motion";
import headshot from "../../src/images/headshot.jpg";
import "../style/About.css";

const About = () => {
  return (
    <motion.div 
      className="section" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <h1 className="about-title">About Me</h1>
      
      <div className="about-container">
        <motion.img 
          className="headshot" 
          src={headshot} 
          alt="professional" 
          whileHover={{ scale: 1.05 }}
        />
        
        <div className="about-text">
          <h2 className="intro">Hi, I'm Ananya!</h2>
          <p>
            I'm a junior at <b>Rice University</b>, majoring in  
            <span className="highlight green"> Computer Science</span> with a minor in  
            <span className="highlight yellow"> Data Science</span>.
          </p>

          <h3 className="section-title">What I Do</h3>
          <p>
            As an aspiring <span className="highlight yellow">Software Engineer</span>, I enjoy solving real-world problems with technology.
            My main areas of interest include:
          </p>

          <ul className="skills-list">
            <li><span className="highlight green">Cloud Computing</span></li>
            <li><span className="highlight pink">Cybersecurity</span></li>
            <li><span className="highlight yellow">Machine Learning</span></li>
            <li><span className="highlight green">Data Analytics</span></li>
          </ul>

          <h3 className="section-title">Certifications</h3>
          <p>
            I hold the <span className="highlight yellow">AWS Cloud Practitioner Certification</span>, <span className="highlight pink">ISC2 Certified in Cybersecurity</span>,
            and I'm a licensed <span className="highlight green">EMT</span> in the state of Texas. I'm currently working towards my AWS Solutions Architect Certification.
          </p>

          <h3 className="section-title">Community Involvement</h3>
          <p>
            I've attended <span className="highlight pink">WiCys 2024</span> and <span className="highlight yellow">Grace Hopper Celebration 2024</span>,
            actively working to support women in tech!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
