import React from 'react';
import apps from '../project.json';
import { categories } from '../helpers/categories';
import '../styling/navbar.css';


export const NavBar = ({selectFromNav}) => {

  const handleType = (type) => {    
    const list = apps.filter((app,i) => app.categories.find((item,i) => item === type));
    const name = list.map(item => item.name)
    console.log(name)
    selectFromNav(name)
  }


  const item = categories.map((catetory,i) => {
    return (
      <div key={i}
        className="navlink" 
        onClick={() => handleType(catetory)}>
          {catetory}
      </div>
    )
  })


  return (
    <div className="navbar-wrapper">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="hamburger-button"><i className="fas fa-bars"></i></label>
      <ul className="navbar-ul">
        {/* <div><a href="">Sebastian</a></div> */}
        <div className="navlink"><a href="https://github.com/Sebastian-Russo" rel="noreferrer" target="_blank">Github</a></div>
        {item}
        <div className="navlink">Total Projects: {apps.length}</div>
      </ul>
    </div>
  )
}
