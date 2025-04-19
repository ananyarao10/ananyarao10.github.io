import { NavLink } from 'react-router-dom';
import './Experiences.css';

const Experiences = () => (
    <div className="App">
        <nav className="nav-bar">
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/projects">Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/experiences">Experiences</NavLink>
        </nav>
        <header className="App-header">
        </header>
    </div>
);
  
export default Experiences;