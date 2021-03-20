import React,{ useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppWrapper } from './app-wrapper';
import { NavBar } from './navbar';
import { About } from './about';
import { Footer } from './footer';
import projects from '../project.json';
import '../styling/App.css';

const App = () => {
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



  return (
    <Router>
      <div className="App">
        <NavBar />

        <About />
        <AppWrapper selected={selected} sortProjects={sortProjects} />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;


