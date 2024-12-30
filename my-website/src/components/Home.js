import React from "react";
import name from "../../src/images/name.png";
import "../style/Home.css"

const Home = () => {
  return (
    <div className="section">
        <div className="lines-container">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <img src={name} width="900" alt="name logo"/>
    </div>
  );
};

export default Home;

