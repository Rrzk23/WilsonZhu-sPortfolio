import React from 'react'
import "./AboutText.css"
import statement from "../assests/statement.pdf";
//import AboutLink from '../Buttons/aboutLinks'
const AboutText = () => {
  const openAboutTitlesContent = (event, titleName) => {
    event.preventDefault();
    const linkNames = document.getElementsByClassName("aboutLinks");
    const contentNames = document.getElementsByClassName("aboutTitlesContent");
    for (let linkName of linkNames) {
      linkName.classList.remove("IsActive");
    }
    for (let contentName of contentNames) {
      contentName.classList.remove("IsActive");
  }
    const clickedElement = event.target;
    clickedElement.classList.add("IsActive");
    const contentId = document.getElementById(titleName);
    contentId.classList.add("IsActive");

    // Add your logic to handle opening the corresponding content here
  };

  return (
    <div className="aboutText">
      <h1>About Me</h1>
      <p>
        Hello! My name is Wilson Zhu, and I'm thrilled to welcome you to my personal portfolio website.
        As a dedicated and passionate computer science student at UNSW, I am embarking on an exciting journey
        to become a full stack developer.
      </p>
      <p>
        <br />
        While I may not have professional internship experience just yet, my unwavering enthusiasm for coding
        and eagerness to learn make me a promising candidate. Throughout my academic journey, I have gained
        a solid foundation in computer science with a WAM of 79. Click the 'Education' text to view my academic
        transcript and course content I learned XD.
      </p>
      <p>
        <br />
        Thank you for taking the time to visit my portfolio website. I invite you to explore my projects and
        get a glimpse into my coding journey. I am open to new opportunities and eager to connect with like-minded
        individuals, so please don't hesitate to reach out if you would like to collaborate or discuss potential
        internships or projects.
      </p>
      <p>
        <br />
        Let's create something amazing together!
      </p>

      <div className="aboutTitles">
        <p className="aboutLinks" onClick={(event) => openAboutTitlesContent(event, 'education')}>
          Education
        </p>
        <p className="aboutLinks IsActive" onClick={(event) => openAboutTitlesContent(event, 'skills')}>
          Skills
        </p>
        <p className="aboutLinks" onClick={(event) => openAboutTitlesContent(event, 'experience')}>
          Experience
        </p>
      </div>
      <div className="aboutTitlesContent" id="education">
        <ul>
          <li>
            University<br />
            <span>University of New South Wales</span>
          </li>
          <li>
            Degree<br />
            <span>Bachelor of Computer Science</span>
          </li>
          <li>
            Course Knowledge & Work<br />
            <a href="#portfolio">University Knowledge</a>
          </li>
          <li>
            Academic Transcript<br />
            <a href = {statement}>Transcript</a>
          </li>
        </ul>
      </div>
      <div className="aboutTitlesContent IsActive" id="skills">
        <ul>
          <li>
            Git<br />
            <span>
              <a href='https://github.com/Rrzk23/WilsonZhu-sPortfolio'>This website folder can be found on my GitHub site!</a>
            </span>
          </li>
          <li>
            Data Structure<br />
            <span>Binary search tree, AVL tree, hash map, heap, adjacent list & matrix</span>
          </li>
          <li>
            Algorithm<br />
            <span>merge sort, Dijkstra, minimum spanning tree, divide and conquer, binary search, dynamic Programming, string matching.</span>
          </li>
          <li>
            Object Oriented Programming<br />
            <span>Java, JavaScript, TypeScript, </span>
          </li>
          <li>
            Web design<br />
            <span>HTML, CSS, JavaScript, React, Node.js, deployment </span>
          </li>
        </ul>
      </div>
      <div className="aboutTitlesContent" id="experience">
        <ul>
          <li>
            2022-2023<br />
            <span>Mathematics & Business tutor</span>
          </li>
          <li>
            2023-now<br />
            <span>Looking for internship opportunities :D</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutText;
