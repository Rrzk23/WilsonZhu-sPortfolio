import React from 'react'
import Navbar from '../Components/Navbar';
import AboutText from '../Components/AboutText';
import "./About.css";
import image from "../assests/myPicture.jpg";


const About = () => {
  return (
    <div>
      <div id="aboutMe">
      <Navbar/>
        <div class="container">
          <div class="hori">
      
            <div class="aboutImage1">
              <img src = {image} alt = "me"/>
            </div>
            <AboutText/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
