import React from 'react';
import '../styling/footer.css';

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h2>Like what you see?</h2>
      <div><img src="https://media.giphy.com/media/gEwrHonZ00d8bBDtOS/giphy.gif" alt="gif" width="250px"/></div>
      <div>Contact me:</div>
      <div>Sebastian Russo</div>
      <div><a href="mailto:russo.sebastian@gmail.com">russo.sebastian@gmail.com</a></div>
      <div><a href="https://www.linkedin.com/in/sebastian-russo-2054565a/">
            <i className="fab fa-linkedin"></i>
            LinkedIn</a>
      </div>
      <div><a href="https://github.com/Sebastian-Russo">
          <i className="fab fa-github-square"></i>
            Icon Github</a></div>
    </div>
  )
}