import React from 'react';
import Navbar from '../Components/Navbar';
import "./Home.css";
import CV from "../assests/CV.pdf"
import Statement from "../assests/CV.pdf"
const Home = () => {
    return (
        <div id="header">
            
          <Navbar/>
          <div className="introduction">
            <p>Full Stack Developer</p>
            <h1>Hi, I'm <span>Wilson</span> From Sydney!</h1>
            <a className='CV' href={CV}>My CV</a>
            <a className='CV' id = "second" href={Statement}>Academic Statement</a>
          </div>

        </div>
      );
}

export default Home
