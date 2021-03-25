import React from 'react'; 
import image from '../images/swordfish.jpeg'
import '../styling/about.css';

export const About = () => {
  return (
    <div className="about" id="top"> 
      <div className="img-wrapper"><img src={image} alt="computers"/></div>
      <div className="about-wrapper">
          <h1>Hi, I'm Sebastian Russo</h1>
          <h2>I'm a fullstack developer</h2>
          <div>
            Heavy focus in React and frontend. Node.js backend. 
            Experienced with modern tooling and excited to continue growing as an engineer. 
          </div>
          <div>
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-node-js"></i>
              {/* <div><img src="/images/mongo.png" alt="mongodb"/></div> */}
          </div>
          <div>Proficient Technologies:</div>
          <div className="tech">HTML, CSS, JavaScript, React, React/Redux, jQuery, Node.js, Express.js, MongoDB</div>
          <div>Currently Learning:</div>
          <div className="tech" id="projects">TypeScript, AWS, SQL</div>
      </div>
    </div>
  )
}