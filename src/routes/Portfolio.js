import React from 'react'
import Navbar from '../Components/Navbar';
import PortfolioBar from '../Components/PortfolioBar';
import "./Portfolio.css";
const Portfolio = () => {

  const projects = [
    {
      image: './photo/eventStreaming.png', 
      link: 'https://www.google.com/',
      description: 'event streaming infrastructure',
      title:  'Event streaming system modelling',
    },
    {
      image: '../photo/images.jpg', 
      link: 'https://example.com/project2',
      description: 'Project 2 Description',
      title:  'Satellite communicate system modelling',
    },
    {
      image: '../photo/eventStreaming.png',
      link: 'https://example.com/project2',
      description: 'Project 2 Description',
      title:  'Second',
    },
    {
      image: '../photo/eventStreaming.png', 
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
