import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Experiences.css';
import logo from '../logo.png';

const experiences = [
  {
    date: "JUN 2025 - AUG 2025",
    title: "Software Engineering Intern",
    company: "J.P. MORGAN CHASE & CO.",
    description: `Designed and developed a UI with an AWS Lambda backend that allows users resolving exceptions in the electronic trading platform to clear Kafka lag on a topic and download message files directly from S3 via API Gateway, successfully pushed my code changes to production and oversaw the production release.`,
    tech: ["React", "AWS", "Apache Kafka", "Terraform"],
    link: "https://careers.jpmorgan.com/global/en/students/programs/software-engineer-summer"
  },
  {
    date: "JUN 2024 - AUG 2024",
    title: "Software Engineering Intern",
    company: "J.P. MORGAN CHASE & CO.",
    description: "Designed and developed a UI with an AWS Lambda backend that allows users resolving exceptions in the electronic trading platform to clear Kafka lag on a topic and download message files directly from S3 via API Gateway, successfully pushed my code changes to production and oversaw the production release.",
    tech: ["React", "AWS", "Apache Kafka", "Terraform", "Spring Boot"],
    link: "https://careers.jpmorgan.com/global/en/students/programs/software-engineer-summer"
  },
  {
    date: "APR 2024 - SEP 2024",
    title: "Tracks and Workshops Director",
    company: "HACKRICE 14",
    description: "HackRice is Rice's student-led hackathon that attracts over 400 participants each year from various universities. I spearheaded creation of the three different tracks (Game Development, Education, and Healthcare) and led workshops about AI & AWS, Mathworks, Professional/Career Development, and Game Development.",
    tech: ["PyGame", "Git"],
    link: "https://www.hackrice.com/"
  },
  {
    date: "DEC 2023 - Present",
    title: "Webmagister",
    company: "JONES RESIDENTIAL COLLEGE",
    description: "Ensuring up-to-date content, managing/maintaining the website, and implementing improvements to enhance user experience.",
    tech: ["Java", "Git", "Mentorship"],
    link: "https://jones.rice.edu/"
  },
  {
    date: "APR 2023 - SEP 2023",
    title: "PR and Registration Director",
    company: "HACKRICE 13",
    description: "HackRice is Rice's student-led hackathon that attracts over 400 participants each year from various universities.I directed our outreach campaigns, managed registration logistics, and spearheaded initiatives that led to a record-breaking number of project submissions and registered attendees.",
    tech: ["Java", "Git", "Mentorship"],
    link: "https://www.hackrice.com/"
  },
  {
    date: "AUG 2023 - Present",
    title: "Student Computing Consultant",
    company: "OFFICE OF INFORMATION AND TECHNOLOGY",
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
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
        <NavLink to="/about" className="nav-link">ABOUT</NavLink>
        <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
        <NavLink to="/experiences" className="nav-link active-link">EXPERIENCES</NavLink>
      </nav>
      <main className="timeline-container">
        {experiences.map((exp, idx) => (
            <div className={`timeline-item ${activeIndex === idx ? 'active' : ''}`} key={idx} onClick={() => handleCardClick(idx)}>
            <div className="timeline-left">
              <div className={`timeline-date ${activeIndex === idx ? 'active-date' : ''}`}>{exp.date}</div>
              <div className={`timeline-dot ${activeIndex === idx ? 'active-date' : ''}`} />
            </div>
            <div className={`timeline-content ${activeIndex === idx ? 'expanded' : ''}`}>
              <h3 className='position'>{exp.title}</h3>
              <a href={exp.link} className='company' target='blank'>{exp.company}</a>
              <p>{exp.description}</p>
              <div className="tech-tags">
                {exp.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>          
        ))}
      </main>
    </div>
  );
};

export default Experiences;
