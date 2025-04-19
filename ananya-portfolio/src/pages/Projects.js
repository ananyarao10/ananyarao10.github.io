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

const hackathonDetails = [
  {
    title: "JPMC Code for Good",
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
      description: "Built a platform to connect nonprofits with developers in a weekend sprint.",
      link: "https://ghc.anitab.org/"
    },
    {
      title: "Women in Cybersecurity",
      image: wicys,
      description: "Collaborated globally to develop fintech tools in 24 hours.",
      link: "https://www.wicys.org/"
    }
  ];

const Projects = () => {
    const [openPopupIdx1, setOpenPopupIdx1] = useState(null);
    const [openPopupIdx2, setOpenPopupIdx2] = useState(null);
    const [openPopupIdx, setOpenPopupIdx] = useState(null);

    return (
    <div className="App">
        <nav className="nav-bar">
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/projects">Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/experiences">Experiences</NavLink>
        </nav>
        <main className="projects-container">
            {[
                {
                title: "Jones College Website",
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
            ].map((project, idx) => (
                <Card key={idx} className="project-card">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                    <Card.Title className='project-title'>{project.title}</Card.Title>
                    <Button className="view-project" variant="primary" onClick={() => setOpenPopupIdx1(idx)}>learn more →</Button>
                </Card.Body>
                {openPopupIdx1 === idx && (
                <div className="popup-overlay" onClick={() => setOpenPopupIdx1(null)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={() => setOpenPopupIdx1(null)}>✖</button>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">view project</a>
                    </div>
                </div>
                )}
                </Card>
            ))}
        </main>

        <main className="projects-container">
        {hackathonDetails.map((hackathon, idx) => (
          <Card key={idx} className="hackathon-card">
            <Card.Img variant="top" src={hackathon.image} />
            <Card.Body>
              <Card.Title className='project-title'>{hackathon.title}</Card.Title>
              <Button
                className="view-project"
                variant="primary"
                onClick={() => setOpenPopupIdx(idx)}
              >
                read about my experience →
              </Button>
            </Card.Body>

            {openPopupIdx === idx && (
              <div className="popup-overlay" onClick={() => setOpenPopupIdx(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={() => setOpenPopupIdx(null)}>✖</button>
                  <h2>{hackathon.title}</h2>
                  <p>{hackathon.description}</p>
                  <a href={hackathon.link} target="_blank" rel="noopener noreferrer">learn more</a>
                </div>
              </div>
            )}
          </Card>
        ))}
      </main>

      <main className="projects-container">
        {conferenceDetails.map((conference, idx) => (
          <Card key={idx} className="conference-card">
            <Card.Img variant="top" src={conference.image} />
            <Card.Body>
              <Card.Title className='project-title'>{conference.title}</Card.Title>
              <Button
                className="view-project1"
                variant="primary"
                onClick={() => setOpenPopupIdx2(idx)}
              >
                read about my experience →
              </Button>
            </Card.Body>

            {openPopupIdx2 === idx && (
              <div className="popup-overlay" onClick={() => setOpenPopupIdx2(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={() => setOpenPopupIdx2(null)}>✖</button>
                  <h2>{conference.title}</h2>
                  <p>{conference.description}</p>
                  <a href={conference.link} target="_blank" rel="noopener noreferrer">learn more</a>
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