import React from 'react'; 
import { AppCard } from './app-card';
import '../styling/app-wrapper.css';

export const AppWrapper = ({selected}) => {

  const project = selected.map((item,i) => {
    return (
      <AppCard key={i} item={item} />
    )
  })

  return (
    <div>
      {project}
    </div>
  )
}
