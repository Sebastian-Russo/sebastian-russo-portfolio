import React from 'react'; 
import { AppCard } from './app-card';
import '../styling/app-wrapper.css';

export const AppWrapper = ({selected}) => {

  const project = selected.map((item,i) => {
    return (
      <div key={i} className="app-wrapper">
        <AppCard item={item} />
      </div>
    )
  })

  return (
    <div>
      {project}
    </div>
  )
}
