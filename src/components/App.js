import React from 'react'; 
import { BrowserRouter as Router} from "react-router-dom";
import { AppWrapper } from './app-wrapper';
import { NavBar } from './navbar';
import { About } from './about';
import { Footer } from './footer';
import '../styling/App.css';

const App = () => {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <About />
        <AppWrapper />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


