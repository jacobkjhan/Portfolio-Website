import React, { Component } from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';


class Skills extends Component {
    render(){
      return (
        <div className="skills" style={{"background-color": "black"}}>
          <h1 style={{"color": "white", "float": "right"}}>About</h1>
          <div className="info-box">
            <div className="portrait">
              <img src="/assets/jacob.JPG"/>
            </div>
            <div className="description">
              <p style={{"font-family": "Baskerville", "font-size": "1.5em"}}>
              I'm a full stack web developer based in New York City and currently a teaching fellow at Fullstack Academy of Code.
              As of this moment, I specialize in the JavaScript NERD stack (Node, Express, React, Databases using SQL).
              I want to venture out furthur and deeper into the world of web development in order to find intersections between coding and societal utility.
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Skills;
