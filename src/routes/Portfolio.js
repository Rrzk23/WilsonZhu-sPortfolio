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
      description: 'WiseStay is the first company I worked in Australia for web development. The website is designed by sitemodify and I coded the Javascript relate part such as flitering and connecting to database. Click to see the pages ',
      title:  'WiseStay website design and functionality',
    },
    {
      image: roboticsS, 
      link: robotics,
      description: 'This lab project requires me to code as a team to so that robot can explore, record, spot the markers in the maze. It requires understanding of different sensors and connect to different package in ROS2. We got 90/100 for the final outcome, click to watch the video and my contribution paper',
      title:  'Maze Exploration TurtleBot',
    },
    {
      image: eventStreaming,
      link: 'https://nw-syd-gitlab.cseunsw.tech/COMP2511/23T2/students/z5423255/assignment-iii',
      description: 'Java project that start from scratch. It is an event streaming java project inspired by Kafka, this project incurs the use of Git, testing cases and code design. Click to see the repo of the project and specification in README and also the test outcome',
      title:  'Event Streaming Java software design and engineering',
    },
    {
      image: Satellite, 
      link: 'https://nw-syd-gitlab.cseunsw.tech/COMP2511/23T2/students/z5423255/assignment-i',
      description: 'Satellite communication assignment in Java. Click to see the repo of the project and specification in README and also the test outcome',
      title:  'Satellite',
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
