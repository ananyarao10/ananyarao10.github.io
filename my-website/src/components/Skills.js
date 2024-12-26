import React from "react";
import "../style/Skills.css"
import python from "../../src/python.png";
import react from "../../src/react.png";
import java from "../../src/java.png";
import aws from "../../src/aws.png";
import C from "../../src/C.png";
import node from "../../src/node.png";
import ts from "../../src/ts.png";
import go from "../../src/go.png";

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
