import React from 'react'
import Navbar from '../Components/Navbar';
import PortfolioBar from '../Components/PortfolioBar';
import "./Portfolio.css";
import eventStreaming from "../assests/eventStreaming.png";
import robotics from "../assests/robotics.pdf";
import roboticsS from "../assests/roboticsS.png";
import Satellite from "../assests/satellite.png";
import wiseStay from "../assests/wiseStay.png"
const Portfolio = () => {

  const projects = [
    {
      image: wiseStay, 
      link: 'https://www.wisestay.com.au/',
      description: 'This is a simplify version of Kafka ',
      title:  'WiseStay website design and functionality',
    },
    {
      image: roboticsS, 
      link: robotics,
      description: 'Project 2 Description',
      title:  'Maze Exploration TurtleBot',
    },
    {
      image: eventStreaming,
      link: 'https://nw-syd-gitlab.cseunsw.tech/COMP2511/23T2/students/z5423255/assignment-iii',
      description: 'Project 2 Description',
      title:  'EventStreaming Java software design and engineering',
    },
    {
      image: Satellite, 
      link: 'https://nw-syd-gitlab.cseunsw.tech/COMP2511/23T2/students/z5423255/assignment-i',
      description: 'Satellite communication assignment in Java',
      title:  '',
    },
    // Add more projects as needed
  ];
  return (
    <div>

      <Navbar/>
      
      <div className="bar-row">
      {projects.map((project, index) => (
        <PortfolioBar
          link={project.link}
          key={index}
          description={project.description}
          image={project.image}
          title={project.title}
        />
      ))}
      </div>


    </div>
  )
}

export default Portfolio
