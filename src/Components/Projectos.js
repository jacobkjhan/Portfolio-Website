import React, { Component } from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';


class Projects extends Component {
    render(){
      return (
        <div className="project-organize">
          <h1>Projects</h1>
          <div className="projects">
            <div className="project">
              <img src="https://c1.staticflickr.com/1/155/410538004_ce7afc9330_b.jpg" />
              <div className="project-container">
                <h4><b>Project</b></h4>
                <p>Project Description</p>
              </div>
            </div>
            <div className="project">
              <img src="https://c1.staticflickr.com/1/155/410538004_ce7afc9330_b.jpg" />
              <div className="project-container">
                <h4><b>Project</b></h4>
                <p>Project Description</p>
              </div>
            </div>
            <div className="project">
              <img src="https://c1.staticflickr.com/1/155/410538004_ce7afc9330_b.jpg" />
              <div className="project-container">
                <h4><b>Project</b></h4>
                <p>Project Description</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Projects;
