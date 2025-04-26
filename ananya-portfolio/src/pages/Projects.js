import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Projects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jones from '../jones.png';
import nourish from '../nourish.png';
import desklink from '../desklink.png';
import code_for_good from '../code_for_good.png';
import jpmc from '../jpmc.webp';
import hack_rice from '../hack_rice.png';
import ghc from '../ghc.png';
import wicys from '../wicys.png';
import ghc_1 from '../ghc_1.jpeg';
import ghc_2 from '../ghc_2.jpeg';
import ghc_3 from '../ghc_3.jpeg';
import ghc_4 from '../ghc_4.jpeg';
import ghc_5 from '../ghc_5.jpeg';
import wicys_1 from '../wicys_1.jpeg';
import wicys_2 from '../wicys_2.jpeg';
import wicys_3 from '../wicys_3.jpeg';

const projectDetails = [
    {
    title: "Jones College",
    description: "A responsive weather dashboard using OpenWeather API and React.",
    image: jones,
    link: "https://jones.rice.edu/"
    },
    {
    title: "NourishUS",
    description: "Tracks income and expenses with charts and real-time calculations.",
    image: nourish,
    link: "https://www.figma.com/proto/ThK451j4xAAIEE32H5dNaJ/NourishUS-Prototype?t=5zi1PHTlTl0YGuOx-1"
    },
    {
    title: "DeskLink",
    description: "A personal portfolio to showcase my projects and experience.",
    image: desklink,
    link: "https://www.figma.com/proto/paSLuO7kz5SxlN7ec3zsta/DeskLink-Hi-Fi-Prototype?t=5zi1PHTlTl0YGuOx-1"
    }
];

const hackathonDetails = [
  {
    title: "Code for Good",
    image: code_for_good,
    description: "Built a platform to connect nonprofits with developers in a weekend sprint.",
    link: "https://careers.jpmorgan.com/us/en/students/programs/tfsg-hackathons"
  },
  {
    title: "Global Hackathon",
    image: jpmc,
    description: "Collaborated globally to develop fintech tools in 24 hours.",
    link: "https://www.jpmorgan.com/technology/technology-blog/innovation-week"
  },
  {
    title: "HackRice",
    image: hack_rice,
    description: "Created a project that won the Best Campus Innovation prize at Rice's hackathon.",
    link: "https://www.hackrice.com/"
  }
];

const conferenceDetails = [
    {
      title: "Grace Hopper",
      image: ghc,
      description: "Throughout my time at GHC I participated in a variety of workshops including hands-on experimentation with AWS DeepRacer, cryptography capabilities with Tink, resume tips and tricks, and more. I had the opportunity to connect and network with professionals in various different industries and roles and was blown away by what a supportive and inspiring community of women I was instantly welcomed into. From meeting other students in career fair lines and sharing our experiences to getting invited to an after hours Bank of America event, attending GHC is an experience I'll always treasure.",
      link: "https://ghc.anitab.org/",
      images: [ghc_1, ghc_2, ghc_3, ghc_4, ghc_5]
    },
    {
      title: "Women in Cybersecurity",
      image: wicys,
      description: "An inclusive global community dedicated to recruiting, retaining, and advancing women in cybersecurity. I engaged in interactive panels, career development sessions, and participated in CTFs and technical bootcamps.",
      link: "https://www.wicys.org/",
      images: [wicys_1, wicys_2, wicys_3]
    }
];

const Projects = () => {
    const [openProjectPopup, setOpenProjectPopup] = useState(null);
    const [openHackathonPopup, setOpenHackathonPopup] = useState(null);
    const [openConferencePopup, setOpenConferencePopup] = useState(null);

    return (
    <div className="App">
        <nav className="nav-bar">
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/projects">Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/experiences">Experiences</NavLink>
        </nav>

        <h2 className="projects-title">projects</h2>
        <main className="projects-container">
        {projectDetails.map((project, idx) => (
            <Card key={idx} className="project-card">
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <div className='card-body'>
                <Card.Title className='project-title'>{project.title}</Card.Title>
                <Button className="view-project" variant="primary" onClick={() => setOpenProjectPopup(idx)}>→</Button>
              </div>
            </Card.Body>
            {openProjectPopup === idx && (
            <div className="popup-overlay" onClick={() => setOpenProjectPopup(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setOpenProjectPopup(null)}>✖</button>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">view project</a>
                </div>
            </div>
            )}
            </Card>
        ))}
        </main>
        
        <h2 className="hackathon-title">hackathons</h2>
        <main className="hackathons-container">
        {hackathonDetails.map((hackathon, idx) => (
          <Card key={idx} className="hackathon-card">
            <Card.Img variant="top" src={hackathon.image} />
            <Card.Body>
              <div className='card-body'>
                <Card.Title className='project-title'>{hackathon.title}</Card.Title>
                <Button className="view-hackathon" variant="primary" onClick={() => setOpenHackathonPopup(idx)}>→</Button>
              </div>
            </Card.Body>

            {openHackathonPopup === idx && (
              <div className="popup-overlay" onClick={() => setOpenHackathonPopup(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={() => setOpenHackathonPopup(null)}>✖</button>
                  <h2>{hackathon.title}</h2>
                  <p>{hackathon.description}</p>
                  <a href={hackathon.link} target="_blank" rel="noopener noreferrer">learn more</a>
                </div>
              </div>
            )}
          </Card>
        ))}
        </main>

        <h2 className="projects-title">conferences</h2>
        <main className="conferences-container">
        {conferenceDetails.map((conference, idx) => (
          <Card key={idx} className="conference-card">
            <Card.Img variant="top" src={conference.image} />
            <Card.Body>
              <div className='card-body'>
                <Card.Title className='project-title'>{conference.title}</Card.Title>
                <Button className="view-conference" variant="primary" onClick={() => setOpenConferencePopup(idx)}>→</Button>
              </div>
            </Card.Body>

            {openConferencePopup === idx && (
            <div className="popup-overlay" onClick={() => setOpenConferencePopup(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setOpenConferencePopup(null)}>✖</button>
                <section>
                    <h3>What it was:</h3>
                    <p>{conference.description}</p>
                </section>
                <a href={conference.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                <div className="popup-gallery">
                    {conference.images?.map((imgSrc, i) => (
                    <img key={i} src={imgSrc} alt={`${conference.title} ${i + 1}`} />
                    ))}
                </div>
                </div>
            </div>
            )}
          </Card>
        ))}
        </main>
    </div>
);
};
  
export default Projects;