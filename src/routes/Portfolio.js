import React from 'react'
import Navbar from '../Components/Navbar';
import PortfolioBar from '../Components/PortfolioBar';
import "./Portfolio.css";
import eventStreaming from "../assests/eventStreaming.png";
import images from "../assests/images.jpg";
import Satellite from "../assests/satellite.png";
const Portfolio = () => {

  const projects = [
    {
      image: eventStreaming, 
      link: 'https://www.google.com/',
      description: 'event streaming infrastructure',
      title:  'Event streaming system modelling',
    },
    {
      image: Satellite, 
      link: 'https://example.com/project2',
      description: 'Project 2 Description',
      title:  'Satellite communicate system modelling',
    },
    {
      image: eventStreaming,
      link: 'https://example.com/project2',
      description: 'Project 2 Description',
      title:  'Second',
    },
    {
      image: eventStreaming, 
      link: 'https://example.com/project2',
      description: 'Project 2 Description',
      title:  'Second',
    },
    // Add more projects as needed
  ];
  return (
    <div>

      <Navbar/>
      <h1>My portfolio</h1>
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
