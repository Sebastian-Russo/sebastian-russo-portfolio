import React from 'react'; 
import { imageFunction } from '../helpers/image-function'
import '../styling/app-card.css'; 

export const AppCard = ({item}) => {

  const image = imageFunction(item.name)

  return (
    <div className="card-wrapper">
      <h2>{item.name}</h2>
      <div className="image-wrapper">
          <a href={item.url.live} target="_blank" rel="noreferrer"><img src={image} alt="project" /></a>
        </div>
      <div>{item.description[0]}</div>
      <div>icons</div>
      <div><a href={item.url.live} target="_blank" rel="noreferrer">View Project</a></div>
      <div><a href={item.url.github} target="_blank" rel="noreferrer">View Code</a></div>
    </div>
  )
}