import React, { Component } from 'react';
import './App.css';
// import NavBar from './Components/NavBar.js';
import LandingPage from './Components/LandingPage.js';
import Projects from './Components/Projectos.js';
import Skills from './Components/Skills.js';
import Contact from './Components/Contact.js';
// import Scroll from 'react-scroll';
// import Scrollspy from 'react-scrollspy';

class App extends Component {
  render() {
    return (
      <div>
          {/* <NavBar /> */}
            <div className="App">
                <LandingPage />
                <Projects />
                <Skills />
                <Contact />
            </div>
      </div>
    );
  }
}

export default App;
