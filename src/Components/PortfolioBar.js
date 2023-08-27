
import React,  {useState} from 'react'
import './PortfolioBar.css'

const PortfolioBar = ({link, title, description, image}) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    const buttonStyle = {
      backgroundImage: `url(${image})`,
    };
  return (
    <div>
        <a 
            href = {link}
            className={`portfolio-bar ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle}      
        > 
            {hovered && <div className="description"><p>{description}</p></div>}

    </a>
    <div className='title'>{title}</div> 
    </div>
  )
}

export default PortfolioBar