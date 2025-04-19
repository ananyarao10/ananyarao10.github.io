import { NavLink } from 'react-router-dom';
import './Projects.css';

const Projects = () => (
    <div className="App">
        <nav className="nav-bar">
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">
                Home
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">
                About
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/projects">
                Projects
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/experiences">
                Experiences
            </NavLink>
        </nav>
        <header className="App-header">
            <h1 className="App-title">Projects</h1>
        </header>
    </div>
);
  
export default Projects;