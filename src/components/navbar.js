import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import apps from '../project.json';
import '../styling/navbar.css';


export const NavBar = () => {

  return (
    <nav className="navbar-wrapper">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="hamburger-button"><i className="fas fa-bars"></i></label>
      <ul className="navbar-ul">
        <div><HashLink smooth to="#contact" className="navlink">Sebastian Russo</HashLink></div>
        <div className="navlink"><a href="https://github.com/Sebastian-Russo" rel="noreferrer" target="_blank">Github</a></div>
        <div className="navlink"><HashLink smooth to="#top">Top</HashLink></div>
        <div className="navlink"><HashLink smooth to="#projects">Projects</HashLink></div>
        <div className="navlink"><HashLink smooth to="#contact">Contact</HashLink></div>
        {/* <div className="navlink">Total Projects: {apps.length}</div> */}
      </ul>
    </nav>
  )
}
