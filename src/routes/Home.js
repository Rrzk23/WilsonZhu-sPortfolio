import React from 'react';
import Navbar from '../Components/Navbar';
import "./Home.css";
const Home = () => {
    return (
        <div id="header">
            
          <Navbar/>
          <div className="introduction">
            <p>Full Stack Developer</p>
            <h1>Hi, I'm <span>Wilson</span><br />From Sydney!</h1>
          </div>

        </div>
      );
}

export default Home
