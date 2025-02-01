import React from "react";
import "../style/Skills.css";
import { FaPython, FaReact, FaJava, FaAws, FaNodeJs, FaHtml5, FaDocker } from "react-icons/fa";
import { SiGo, SiC, SiKubernetes } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandTerraform } from "react-icons/tb";


const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "GoLang", icon: <SiGo /> },
      { name: "C", icon: <SiC /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "HTML", icon: <FaHtml5 /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Spring Boot", icon: <BiLogoSpringBoot /> }
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Terraform", icon: <TbBrandTerraform /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <FaDocker /> }
    ],
  },
];

const Skills = () => {
  return (
    <div className="section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-card">
            <h2 className="skill-category">{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-label">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;