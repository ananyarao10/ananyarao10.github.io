import React from "react";
import "../style/Experience.css";

const Experience = () => {
  return (
    <div className="section">
      <h1 className="experience-title">Experience</h1>
      <ul>
        <li
          className="timeline_piece"
          style={{ "--accent-color": "#FE9898" }}
        >
          <div className="date">June 2024</div>
          <div className="title">
            Software Engineering Intern at JPMC
          </div>
          <div className="descr">
            Designed and developed a UI with an AWS Lambda backend that allows
            users resolving exceptions in the electronic trading platform to
            clear Kafka lag on a topic and download message files directly from
            S3 via API Gateway, successfully pushed my code changes to
            production and oversaw the production release.
          </div>
        </li>
        <li
          className="timeline_piece"
          style={{ "--accent-color": "#FDDE42" }}
        >
          <div className="date">April 2024</div>
          <div className="title">
            HackRice Tracks/Workshops Director
          </div>
          <div className="link">
            learn more{" "}
            <u>
              <a href="https://www.hackrice.com/" target="_blank" rel="noopener noreferrer">
                here
              </a>
            </u>
          </div>
          <div className="descr">
            Spearheaded creation of tracks and led workshops catering to over
            400 participants about AI & AWS, Mathworks, Professional/Career
            Development, and Game Development.
          </div>
        </li>
        <li
          className="timeline_piece"
          style={{ "--accent-color": "#06D504" }}
        >
          <div className="date">Dec 2023</div>
          <div className="title">Jones Webmaster</div>
          <div className="link">
            learn more{" "}
            <u>
              <a href="https://jones.rice.edu/" target="_blank" rel="noopener noreferrer">
                here
              </a>
            </u>
          </div>
          <div className="descr">
            Ensuring up-to-date content, managing/maintaining the website, and
            implementing improvements to enhance user experience.
          </div>
        </li>
        <li
          className="timeline_piece"
          style={{ "--accent-color": "#FE9898" }}
        >
          <div className="date">April 2023</div>
          <div className="title">
            HackRice PR & Registration Director
          </div>
          <div className="link">
            learn more{" "}
            <u>
              <a href="https://www.hackrice.com/" target="_blank" rel="noopener noreferrer">
                here
              </a>
            </u>
          </div>
          <div className="descr">
          Directed outreach campaigns, managed registration logistics, and spearheaded initiatives that led to a record-breaking number of HackRice project submissions.
          </div>
        </li>
        <li
          className="timeline_piece"
          style={{ "--accent-color": "#FDDE42" }}
        >
          <div className="date">Aug 2023</div>
          <div className="title">
            Student Computing Consultant
          </div>
          <div className="link">
            learn more{" "}
            <u>
              <a href="https://oit.rice.edu/" target="_blank" rel="noopener noreferrer">
                here
              </a>
            </u>
          </div>
          <div className="descr">
            Offer support to students, faculty, and staff at Rice with
            technology-related issues.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
