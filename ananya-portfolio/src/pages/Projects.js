import { NavLink } from 'react-router-dom';
import './Projects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jones from '../jones.png';
import nourish from '../nourish.png';
import desklink from '../desklink.png';


const Projects = () => (
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
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary" href={project.link} target="_blank">View Project</Button>
                </Card.Body>
                </Card>
            ))}
        </main>
        <main className="hackathons-container">
            {[
                {
                title: "JPMC Code for Good",
                description: "A responsive weather dashboard using OpenWeather API and React.",
                },
                {
                title: "JPMC Global Hackathon",
                description: "Tracks income and expenses with charts and real-time calculations.",
                },
                {
                title: "HackRice",
                description: "A personal portfolio to showcase my projects and experience.",
                }
            ].map((project, idx) => (
                <Card key={idx} className="hackathon-card">
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                </Card>
            ))}
        </main>
        <main className="conferences-container">
            {[
                {
                title: "WiCys Conference",
                description: "A responsive weather dashboard using OpenWeather API and React.",
                link: "https://jones.rice.edu/"
                },
                {
                title: "Grace Hopper Conference",
                description: "Tracks income and expenses with charts and real-time calculations.",
                link: "https://www.figma.com/proto/ThK451j4xAAIEE32H5dNaJ/NourishUS-Prototype?t=5zi1PHTlTl0YGuOx-1"
                }
            ].map((project, idx) => (
                <Card key={idx} className="conference-card">
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary" href={project.link} target="_blank">View Project</Button>
                </Card.Body>
                </Card>
            ))}
        </main>
    </div>
);
  
export default Projects;