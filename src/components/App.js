import React,{ useState } from 'react'; 
import { AppWrapper } from './app-wrapper';
import { NavBar } from './navbar';
import { About } from './about';
import { Footer } from './footer';
import projects from '../project.json';
import '../styling/App.css';

const App = () => {
  const [selected, setSelected] = useState(projects);

  const selectFromNav = (category) => {
      // map over selected projects array into obj keys
      const obj = {};
      for (let item of category) {
        obj[item] = obj[item] +1 || 1
      }
      // filter out the selected projects obj/data from array of all projects data
      const pro = projects.filter(item => obj[item.name])
    setSelected(pro)
  }

  return (
    <div className="App">
      <NavBar selectFromNav={selectFromNav} />
      <About />
      <AppWrapper selected={selected} />
      <Footer />
    </div>
  );
}

export default App;


