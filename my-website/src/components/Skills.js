import React from "react";
import "../style/Skills.css"
import python from "../../src/images/python.png";
import react from "../../src/images/react.png";
import java from "../../src/images/java.png";
import aws from "../../src/images/aws.png";
import C from "../../src/images/C.png";
import node from "../../src/images/node.png";
import ts from "../../src/images/ts.png";
import go from "../../src/images/go.png";

const Skills = () => {
  const skills = [
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Java", img: java },
    { name: "AWS", img: aws },
    { name: "Go", img: go },
    { name: "NodeJS", img: node },
    { name: "TypeScript", img: ts },
    { name: "C", img: C },
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
