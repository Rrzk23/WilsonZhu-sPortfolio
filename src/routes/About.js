import React from 'react'
import Navbar from '../Components/Navbar';
import AboutText from '../Components/AboutText';
import "./About.css";


const About = () => {
  return (
    <div>
      <div id="aboutMe">
      <Navbar/>
        <div class="container">
          <div class="hori">
      
            <div class="aboutImage1">
              <img src = "../photo/background.gif"/>
            </div>
            <AboutText/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
