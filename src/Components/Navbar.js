import "./Navbar.css"
import React from 'react'

const Navbar = () => {
  return (
<div className=  "center_transparent_box"> 
          <nav>
            <p className= "Heading">
            <a href="/">MUKE Zhu</a></p>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About Me</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/Contact">Contact</a></li>
            
          </ul>
          </nav>
          </div>
  )
}

export default Navbar
