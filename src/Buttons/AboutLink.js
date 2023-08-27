import "./AboutLink.css"
import React from 'react'

const AboutLink = ({ title, isActive, onClick }) => {
    return (
      <p className={`aboutLinks ${isActive ? 'IsActive' : ''}`} onClick={onClick}>
        {title}
      </p>
    );
  };
  
  export default AboutLink;