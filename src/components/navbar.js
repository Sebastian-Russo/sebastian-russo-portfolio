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
        className="navlink-wrapper" 
        onClick={() => handleType(catetory)}>
          {catetory}
      </div>
    )
  })


  return (
    <div className="navbar-wrapper">
      {/* <div><a href="">Sebastian</a></div> */}
      <div><a href="https://github.com/Sebastian-Russo" rel="noreferrer" target="_blank">Github</a></div>
      {item}
      <div>Total Projects: {apps.length}</div>
    </div>
  )
}
