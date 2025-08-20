import './Home.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';

const Home = () => {
    const particlesInit = async (main) => {
      await loadFull(main);
    };
  
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              number: {
                value: 50, 
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff", 
              },
              opacity: {
                value: 0.2,
                random: true,
              },
              size: {
                value: 2,
                random: true,
              },
              move: {
                enable: true,
                speed: 0.6, 
                direction: "none",
                outMode: "out",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
                onClick: {
                  enable: false,
                },
              },
            },
          }}
          className="particles-background"
        />
  
        <div className="home-content">
          <div className="background-blob blob1"></div>
          <div className="background-blob blob2"></div>
          <div className="background-blob blob3"></div>
  
          <header className="App-header">
            <h1 className="title">ANANYA RAO</h1>
            <p className="pitch">an aspiring cloud technologist driven by data and design</p>
            <div className='buttons'>
              <Link className="home-page-button" to="about">more about me →</Link>
          </div>
          </header>
        </div>
      </div>
    );
  };
  
  export default Home;
  
  