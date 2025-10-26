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
import wicys_1 from '../wicys_1.jpeg';
import wicys_2 from '../wicys_2.jpeg';
import wicys_3 from '../wicys_3.jpeg';
import logo from '../logo.png';

const projectDetails = [
    {
    title: "Jones Website",
    titleee: "JONES WEBSITE",
    description: "As head-webmagister, I continously work on ensuring information up-to-date while also innovating new website features and functionality. Our website utilizes a simple NodeJS backend and clean React frontend to deliver content in an easily accessible and understandable format to current and prospective students. I periodically meet with our executive cabinet and faculty advisors to ensure goals are met and website information is accurate and relevant. I also mentor more inexperienced team members through the web development process and maintain detailed documentation and instruction manuals for future webmagisters. Reserving different rooms and facilities is a complex organizational task for our college coordinator, so I took it upon myself to design a room reservation and booking feature that is linked to the college calendar and integrated within the website.",
    tools: ["React", "NodeJS", "Netlify", "Figma"],
    image: jones,
    link: "https://jones.rice.edu/"
    },
    {
    title: "NourishUS",
    titleee: "NOURISHUS",
    description: "Students with dietary restrictions and preferences at NUS struggle to find suitable food options. As part of my interaction design class I collaborated with 3 other NUS students and our solution, NourishUS, is a mobile application designed to help NUS students find food options that satisfy their dietary restrictions through detailed filtering, accurate menu and ingredient information, crowdsourced reviews and ratings, location-based services, and more. We followed the entire design process starting with user research and analysis to help us identify pain points and brainstorm the most important features. We used the parallel prototyping strategy efficiently design our application. Finally, we thoroughly tested and evaluated our product with target users and incorporated feedback throughout the iterative design process.",
    image: nourish,
    link: "https://www.figma.com/proto/ThK451j4xAAIEE32H5dNaJ/NourishUS-Prototype?t=5zi1PHTlTl0YGuOx-1"
    },
    {
    title: "DeskLink",
    titleee: "DESKLINK",
    description: "As a student myself, I can understand the struggles of staying motivated and productive while working especially in a remote environemnt. I designed DeskLink as a solution to help connect remote and hybrid employees and students through virtual coworking spaces. With access to integrated pomodoro timers, customizable music and background, shared task lists, and more my goal is to make remote work less isolating. Learning to create a detailed interactive prototype was a great experience and I learned the importance of utilizing design principles such as error prevention and visiblity of system status to prioritize an intuitive user experience. My biggest takeways were that design is a continuous and iterative process and not to skip the low-fi wireframe stage. I'm excited to continue improving my UI/UX and Figma skills.",
    image: desklink,
    link: "https://www.figma.com/proto/paSLuO7kz5SxlN7ec3zsta/DeskLink-Hi-Fi-Prototype?t=5zi1PHTlTl0YGuOx-1"
    }
];

const hackathonDetails = [
  {
    title: "Code for Good",
    titleee: "CODE FOR GOOD",
    image: code_for_good,
    description: "A 24-hour hackathon hosted by JPMorgan Chase where we teamed up to build tech solutions for nonprofit charities.",
    challenge: "The tech workforce is significantly underrepresented by minorities, with Hispanics and African Americans each comprising only 5% of the industry. The challenge was to create something for All Star Code that empowers young men of color to pursue and commit to a technology education and career.",
    solution: "Our solution, which we named Eq-witty, utilized gamification and task-based progression to incentivize and engage the All Star Code community, encouraging students to develop their tech skills. Students could track their progress through visual progress bars, check off completed tasks, and stay motivated by seeing their friends' achievements, fostering long-term engagement and collaboration.",
    lessons: "Programming with React was definitely out of my comfort zone, and I learned the importance of planning before implementing. This allowed me to be mindful about what components I was designing to avoid repetitive work and to prioritize a reusable design. Learning to collaborate with 7 other software engineers where we were all constantly pulling and pushing changes from different branches was a huge learning curve for me and I definitely struggled with managing various merge conflicts. After a sleepless night, I was so proud of the minimum viable product we were able to present. I thoroughly enjoyed the constant collaboration, communication, and problem solving."
  },
  {
    title: "Global Hackathon",
    titleee: "GLOBAL HACKATHON",
    image: jpmc,
    description: "JPMorgan Chase Global Innovation Week is an annual event that brings together employees from around the world to collaborate, innovate, and develop groundbreaking solutions to real-world challenges.",
    challenge: "The challenge was to create a tool that would help the company streamline its internal processes and drive innovatio and has to be designed to address specific operational challenges faced by JPMorgan Chase. We were prompted to leverage cutting-edge technology to enhance efficiency, collaboration, and overall productivity within the organization.",
    solution: "Our solution, which we named Smart Transform, is an intuitive platform that leverages AI to streamline the data transformation process, empowering users to clean, format, and manipulate their data with ease. The application will facilitate effective prompt generation for the LLM and guide users through the data transformation journey, providing clear options at each step and allowing users to backtrack and explore different pathways if needed.",
    lessons: "As an intern, the opportunity to collaborate with experienced full-time employees allowed me to learn so much about what it takes to be successful in a hackathon. We spent a lot of time in the brainstorming stage because we wanted to devise a solution that would have a meaningful use case for JPMC employees while also being creative and innovative. I specifically worked on the frontend and learned a lot about making responsive web layouts, deploying on Terraform, and prioritizing a minimalist and clean UI. By delegating the work between frontend and backend within our team we were able to break down a complex project into more manageable and achievable chunks. I also got hands-on experience with crafting a powerful and informative project pitch and presentation.",
  },
  {
    title: "HackRice",
    titleee: "HACKRICE",
    image: hack_rice,
    description: "HackRice is Rice University's annual hackathon. Participants form teams of up to 4 to work on a project in an environment designed for collaboration. Teams showcase projects after 36 hours of hacking.",
    challenge: "We chose to participate in the beginners track where were were tasked to create a mobile application to help users with a commonly faced problem. Our app was judged based on technical rigor, user interface and design, practicality, impact, originality, and relevance.",
    solution: "We create a mobile application, called Swinner (a play on the phrase swipe for dinner), to help simplify the process of meal planning. Users are presented with various recipes curated to their preferences and by swiping right or left, they can purchase ingredients to cook their favorite meal with ease. I used Python and Kivy to create the GUI.",
    lessons: "I was in charge of the frontend which was very new to me and I learned to rely on mentors and peers for guidance and assistance. Programming is all about troubleshooting and problem solving and skills like communication and critical thinking are incredibly useful. This was the first time I participated in a hackathon and while it was full of many challenges and I felt discouraged at times, it also left me determined to continue learning and developing my skills for future experiences like this.",
  }
];

const conferenceDetails = [
    {
      title: "Grace Hopper",
      titleee: "GRACE HOPPER CELEBRATION",
      image: ghc,
      description: "I attended the 2024 Grace Hopper Celebration conference in Philadelphia for the first time in partnership with the Women in Computer Science club at Rice University. Throughout my time at GHC I participated in a variety of workshops including hands-on experimentation with AWS DeepRacer, cryptography capabilities with Tink, resume tips and tricks, and more. I had the opportunity to connect and network with professionals in various different industries and roles and was blown away by what a supportive and inspiring community of women I was instantly welcomed into. From meeting other students in career fair lines and sharing our experiences to getting invited to an after hours Bank of America event, attending GHC is an experience I'll always treasure.",
      images: [ghc_1, ghc_2, ghc_3]
    },
    {
      title: "Women in Cybersecurity",
      titleee: "WOMEN IN CYBERSECURITY",
      image: wicys,
      description: "I attended the 2024 Women in Cybersecurity conference in Nashville for the first time as a scholarship recipient in partnership with the Women in Cybersecurity club at Rice University. Throughout my time at WiCys I participated in my first ever CTF (capture the flag) where I had the chance to work on a variety of cryptography-related puzzles. I also attended various talks ranging from LLM and Chatbot Applications for cybersecurity careers to a ransomware attack simulation. The field of cybersecurity was all very new to me and I greatly enjoyed learning about what a wide variety of careers the field offers during the career fair. Attending this conference inspired me to get my ISC2 cybersecurity certification and I look forward to learning more!",
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
          <NavLink
            to="https://medium.com/@ananya.rao_39962"
            target="_blank" 
            rel="noreferrer"
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            BLOG
          </NavLink>
        </nav>

        <h2 className="projects-title">PROJECTS</h2>
        <main className="projects-container">
        {projectDetails.map((project, idx) => (
            <Card key={idx} className="project-card">
            <Card.Img variant="top" src={project.image} onClick={() => setOpenProjectPopup(idx)}/>
            <Card.Body>
              <div className='card-body'>
                <Card.Title className='project-title'>{project.title}</Card.Title>
                <Button className="view-project" variant="primary" onClick={() => setOpenProjectPopup(idx)}>→</Button>
              </div>
            </Card.Body>
            {openProjectPopup === idx && (
            <div className="popup-overlay" onClick={() => setOpenProjectPopup(null)}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <div className="background-blob_ blob_1_"></div>
              <div className="background-blob_ blob_2_"></div>
              <div className="background-blob_ blob_3_"></div>
                <button className="close-button" onClick={() => setOpenProjectPopup(null)}>✖</button>
                <h2 className='titleee'>{project.titleee}</h2>
                <p className='lol'>{project.description}</p>
                <a className="project-button" href={project.link} target='blank'>view project</a>
              </div>
            </div>
            )}
            </Card>
        ))}
        </main>
        
        <h2 className="hackathon-title">HACKATHONS</h2>
        <main className="hackathons-container">
        {hackathonDetails.map((hackathon, idx) => (
          <Card key={idx} className="hackathon-card">
            <Card.Img variant="top" src={hackathon.image} onClick={() => setOpenHackathonPopup(idx)}/>
            <Card.Body>
              <div className='card-body'>
                <Card.Title className='project-title'>{hackathon.title}</Card.Title>
                <Button className="view-hackathon" variant="primary" onClick={() => setOpenHackathonPopup(idx)}>→</Button>
              </div>
            </Card.Body>

            {openHackathonPopup === idx && (
              <div className="popup-overlay" onClick={() => setOpenHackathonPopup(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="background-blob_ blob_1_"></div>
                <div className="background-blob_ blob_2_"></div>
                <div className="background-blob_ blob_3_"></div>
                  <button className="close-button" onClick={() => setOpenHackathonPopup(null)}>✖</button>
                  <h2 className='titleee'>{hackathon.titleee}</h2>
                  <p className='desc'>{hackathon.description}</p>
                  <h4 className='heeheehee'>🏆 CHALLENGE:</h4>
                  <p className='haha'>{hackathon.challenge}</p>
                  <h4 className='heeheehee'>💡 WHAT WE MADE:</h4>
                  <p className='haha'>{hackathon.solution}</p>
                  <h4 className='heeheehee'>🧠 WHAT I LEARNED:</h4>
                  <p className='haha'>{hackathon.lessons}</p>
                </div>
              </div>
            )}
          </Card>
        ))}
        </main>

        <h2 className="projects-title">CONFERENCES</h2>
        <main className="conferences-container">
        {conferenceDetails.map((conference, idx) => (
          <Card key={idx} className="conference-card">
            <Card.Img variant="top" src={conference.image} onClick={() => setOpenConferencePopup(idx)}/>
            <Card.Body>
              <div className='card-body'>
                <Card.Title className='project-title'>{conference.title}</Card.Title>
                <Button className="view-conference" variant="primary" onClick={() => setOpenConferencePopup(idx)}>→</Button>
              </div>
            </Card.Body>

            {openConferencePopup === idx && (
            <div className="popup-overlay" onClick={() => setOpenConferencePopup(null)}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <div className="background-blob_ blob_1_"></div>
                <div className="background-blob_ blob_2_"></div>
                <div className="background-blob_ blob_3_"></div>
                <button className="close-button" onClick={() => setOpenConferencePopup(null)}>✖</button>
                <h2 className='titleee'>{conference.titleee}</h2>
                <p className='desc'>{conference.description}</p>
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