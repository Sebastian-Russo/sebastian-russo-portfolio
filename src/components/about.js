import React from 'react'; 
import '../styling/about.css';

export const About = () => {
  return (
    <div className="about-wrapper"> 
      <h1>Hi, I'm Sebastian Russo</h1>
      <h2>I'm a fullstack developer</h2>
      <div>
        Proficient in mobile-first responsive design and test-driven development. 
        Experienced with modern tooling and excited to continue growing as an engineer. 
        Currently, a heavy focus in React and frontend. 
      </div>
      <div>Technologies:</div>
      <div>HTML, CSS, JavaScript, React, React/Reudx, jQuery, Node.js, Express.js, MongoDB</div>
      <div>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-node-js"></i>
          {/* <div><img src="/images/mongo.png" alt="mongodb"/></div> */}
      </div>
      <div>Currently Learning:</div>
      <div>TypeScript, AWS, SQL</div>
    </div>
  )
}