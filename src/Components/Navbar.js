import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<div className=  "center_transparent_box"> 
          <nav>
            <p className= "Heading">
            <Link to="/">Home</Link></p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">AboutMe</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Contact">Contact Me</Link></li>
            
          </ul>
          </nav>
          </div>
  )
}

export default Navbar
