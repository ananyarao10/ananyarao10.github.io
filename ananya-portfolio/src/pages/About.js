import { NavLink } from 'react-router-dom';
import './About.css';
import profilePic from '../profile.jpeg';
import { MdEmail } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa';

const About = () => (
  <div className="App">
    <nav className="nav-bar">
        <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/projects">Projects</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/experiences">Experiences</NavLink>
    </nav>

    <main className="about-container">
      <div className="about-image">
        <img src={profilePic} alt="Ananya Rao" />
      </div>
      <div className="about-text">
        <h1>Hello! My name is Ananya Rao!</h1>
        <p>I’m a senior at Rice University majoring in Computer Science with a minor in Data Science.</p>
        <p>I’m passionate about using technology to solve real-world problems and my interests lie in cloud computing, data analytics, user-focused design, and machine learning.</p>
        <p>I thrive in collaborative environments and enjoy using using my creative and critical thinking mindset to approach the work I do. I’m excited to pursue a career in this dynamic field with limitless opportunities to learn new things every day.</p>
        <p>In my free time I love hiking, running, baking, and reading. </p>
        <div className="about-buttons">
          <a className="button-link" href="mailto:ar156@rice.edu" target="_blank" rel="noopener noreferrer">
            <MdEmail size={20} /> Email Me
          </a>
          <a className="button-link" href="/resume.pdf" download>
            <FaDownload size={18} /> Download My Resume
          </a>
        </div>
      </div>
    </main>

    
  </div>
);

export default About;
