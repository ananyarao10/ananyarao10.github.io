import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Experiences.css';

const experiences = [
  {
    date: "June 2025 - August 2025",
    title: "Software Engineering Intern",
    company: "J.P. Morgan Chase & Co.",
    description: `Designed and developed a UI with an AWS Lambda backend that allows users resolving exceptions in the electronic trading platform to clear Kafka lag on a topic and download message files directly from S3 via API Gateway, successfully pushed my code changes to production and oversaw the production release.`,
    tech: ["React", "AWS", "Apache Kafka", "Terraform"],
    link: "#"
  },
  {
    date: "June 2024 - August 2024",
    title: "Software Engineering Intern",
    company: "J.P. Morgan Chase & Co.",
    description: "Designed and developed a UI with an AWS Lambda backend that allows users resolving exceptions in the electronic trading platform to clear Kafka lag on a topic and download message files directly from S3 via API Gateway, successfully pushed my code changes to production and oversaw the production release.",
    tech: ["React", "AWS", "Apache Kafka", "Terraform", "Spring Boot"],
    link: "#"
  },
  {
    date: "April 2024 - September 2024",
    title: "Tracks and Workshops Director",
    company: "HackRice",
    description: "Spearheaded creation of tracks and led workshops catering to over 400 participants about AI & AWS, Mathworks, Professional/Career Development, and Game Development.",
    tech: ["PyGame", "Git"],
    link: "https://www.hackrice.com/"
  },
  {
    date: "December 2023 - Present",
    title: "Webmagister",
    company: "Jones Residential College",
    description: "Ensuring up-to-date content, managing/maintaining the website, and implementing improvements to enhance user experience.",
    tech: ["Java", "Git", "Mentorship"],
    link: "https://jones.rice.edu/"
  },
  {
    date: "April 2023 - September 2023",
    title: "PR and Registration Director",
    company: "HackRice",
    description: "Directed outreach campaigns, managed registration logistics, and spearheaded initiatives that led to a record-breaking number of HackRice project submissions.",
    tech: ["Java", "Git", "Mentorship"],
    link: "https://www.hackrice.com/"
  },
  {
    date: "August 2023 - Present",
    title: "Student Computing Consultant",
    company: "Rice Office of Information and Technology",
    description: "As an SCC, I provide in-person support and trouble-shooting assistance to students, faculty, and staff at Rice with a variety of technology-related issues. I also continuously monitor our help request dashboard and respond asynchronously to questions.",
    tech: ["Java", "Git", "Mentorship"],
    link: "https://oit.rice.edu/"
  }
];

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? 0 : index);
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/experiences" className="nav-link active-link">Experiences</NavLink>
      </nav>
      <main className="timeline-container">
        {experiences.map((exp, idx) => (
            <div className={`timeline-item ${activeIndex === idx ? 'active' : ''}`} key={idx} onClick={() => handleCardClick(idx)}>
            <div className="timeline-left">
              <div className={`timeline-date ${activeIndex === idx ? 'active-date' : ''}`}>{exp.date}</div>
              <div className="timeline-dot" />
            </div>
            <div className={`timeline-content ${activeIndex === idx ? 'expanded' : ''}`}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <div className="tech-tags">
                {exp.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>
              <a href={exp.link} className="learn-more">learn more</a>
            </div>
          </div>          
        ))}
      </main>
    </div>
  );
};

export default Experiences;
