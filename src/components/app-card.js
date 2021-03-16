import React, { useState } from 'react'; 
import ScrollTrigger from 'react-scroll-trigger';
import { imageFunction } from '../helpers/image-function'
import '../styling/app-card.css'; 

export const AppCard = ({item}) => {
  const [visible, setVisible] = useState(false);

  const onEnterViewport = () => {
    setVisible(true)
  }
  
  const onExitViewport = () => {
    setVisible(false)
  }

  const image = imageFunction(item.name)

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className={`card-wrapper ${visible ? 'container-animate' : ''}`}>
      {/* <div className="card-wrapper"> */}
        <h2>{item.name}</h2>
        <div className="image-wrapper">
            <a href={item.url.live} target="_blank" rel="noreferrer"><img src={image} alt="project" /></a>
          </div>
        <div>{item.description[0]}</div>
        <div>
          <button><a href={item.url.live} target="_blank" rel="noreferrer">View Project</a></button>
          <button><a href={item.url.github} target="_blank" rel="noreferrer">View Code</a></button>
        </div>
      </div>
    </ScrollTrigger>
  )
}