import React from 'react'; 
import { AppCard } from './app-card';
import '../styling/app-wrapper.css';
import { categories } from '../helpers/categories';
import apps from '../project.json';



export const AppWrapper = ({selected, sortProjects}) => {

  const handleType = (type) => {    
    const list = apps.filter((app,i) => app.categories.find((item,i) => item === type));
    const name = list.map(item => item.name)
    console.log(name)
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
    <div id="projects">
      <div className="sort-wrapper">Sort by: {item}</div>
      {project}
    </div>
  )
}
