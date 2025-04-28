import { NavLink } from 'react-router-dom';
import './About.css';
import profilePic from '../profile.jpeg';
import { MdEmail } from 'react-icons/md';
import { FaDownload, FaReact, FaJava, FaPython, FaNodeJs, FaAws } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import logo from '../logo.png';
import Grid from '@mui/material/Grid';
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPostgresql, SiTerraform, SiKubernetes, SiC } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import nremt from '../nremt.png';
import isc2 from '../isc2.png';
import cloud_practitioner from '../cloud_practitioner.png';
import solutions_architect from '../solutions_architect.png';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'GoLang', icon: <FaGolang /> },
  { name: 'C', icon: <SiC /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'Terraform', icon: <SiTerraform /> },
  { name: 'Kubernetes/ Docker', icon: <SiKubernetes /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'NodeJS', icon: <FaNodeJs /> },
  { name: 'Spring Boot', icon: <BiLogoSpringBoot /> }
];

const certs = [
  { name: 'AWS Cloud Practitioner', icon: <img src={cloud_practitioner} alt='cloud practitioner'/> },
  { name: 'ISC2', icon: <img src={isc2} alt='isc2'/> },
  { name: 'NREMT', icon: <img src={nremt} alt='nremt'/> },
  { name: 'AWS Solutions Architect', icon: <img src={solutions_architect} alt='solutions architect'/> },
];

const About = () => (
  <div className="App">
        <nav className="nav-bar">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            EXPERIENCES
          </NavLink>
        </nav>

    <main className="about-container">
      <div className="background-blob blob_1"></div>
      <div className="background-blob blob_2"></div>
      <div className="background-blob blob_3"></div>

      <div className="about-image">
        <img src={profilePic} alt="Ananya Rao" />
      </div>
      <div className="about-text">
        <h1>Hello, my name is Ananya!</h1>
        <p>I’m a senior at Rice University majoring in Computer Science with a minor in Data Science.</p>
        <p>I’m passionate about using technology to solve real-world problems and my interests lie in cloud computing, data analytics, user-focused design, and machine learning.</p>
        <p>I thrive in collaborative environments and enjoy using using my creative and critical thinking mindset to approach the work I do. I’m excited to pursue a career in this dynamic field with limitless opportunities to learn new things every day.</p>
        <div className="about-buttons">
          <a className="button-link" href="mailto:ar156@rice.edu" target="_blank" rel="noopener noreferrer">
            <MdEmail size={20} /> Email Me
          </a>
          <a className="button-link" href="/resume.pdf" download>
            <FaDownload size={18} />My Resume
          </a>
        </div>
      </div>
    </main>

    <div className='skills-certs'>
      
      <div className="skills-container">
        <h2 className="skills-title">SKILLS</h2>
        <Grid container spacing={2.5} className='skills-grid'>
          {skills.map((skill, index) => (
            <Grid item xs={3} key={index}>
              <div className="skill-box">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-text">{skill.name}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="certs-container">
        <h2 className="certs-title">CERTIFICATIONS</h2>
        <Grid container spacing={2.5} className='certs-grid'>
          {certs.map((cert, index) => (
            <Grid item xs={3} key={index}>
              <div className="skill-box">
                <div className="skill-icon">{cert.icon}</div>
                <div className="skill-text">{cert.name}</div>
              </div>
            </Grid>
          ))}
        </Grid>
    </div>

    </div>

  </div>
);

export default About;
