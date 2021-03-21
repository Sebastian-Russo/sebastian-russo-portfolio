import React, { useState } from 'react'; 
import { AppCard } from './app-card';
import '../styling/app-wrapper.css';
import projects from '../project.json';
import { categories } from '../helpers/sort-projects';
import apps from '../project.json';


export const AppWrapper = () => {
  const [selected, setSelected] = useState(projects);

  const sortProjects = (category) => {
      // map over selected projects array into obj keys
      const obj = {};
      for (let item of category) {
        obj[item] = obj[item] +1 || 1
      }
      // filter out the selected projects obj/data from array of all projects data, reversed order to start with most recent
      const pro = projects.filter(item => obj[item.name]).reverse();
    setSelected(pro)
  }

  const handleType = (type) => {    
    const list = apps.filter((app,i) => app.categories.find((item,i) => item === type));
    const name = list.map(item => item.name)
    sortProjects(name)
  }


  const item = categories.map((catetory,i) => {
    return (
      <div key={i}
        className="sort" 
        onClick={() => handleType(catetory)}>
          {catetory}
      </div>
    )
  })

  const project = selected.map((item,i) => {
    return (
      <div key={i} className="app-wrapper">
        <AppCard item={item} />
      </div>
    )
  })

  return (
    <div className="outter-app-wrapper" id="projects">
      <div className="sort-wrapper">Sort by: {item}</div>
      {project}
    </div>
  )
}
