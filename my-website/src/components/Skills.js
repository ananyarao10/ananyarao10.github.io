import React from "react";
import "../style/Skills.css"
import python from "../../src/python.jpg";
import react from "../../src/react.png";
import java from "../../src/java.png";

const Skills = () => {
  const skills = [
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Java", img: java },
    { name: "CSS", img: "path/to/css-logo.png" },
    { name: "HTML", img: "path/to/html-logo.png" },
    { name: "Python", img: "path/to/python-logo.png" },
    { name: "SQL", img: "path/to/sql-logo.png" },
    { name: "Git", img: "path/to/git-logo.png" },
  ];

  return (
    <div className="section">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} className="skill-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
