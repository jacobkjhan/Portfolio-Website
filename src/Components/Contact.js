import React, { Component } from 'react';
import 'animate.css/animate.css';

class Contact extends Component {
  render(){
    return (
      <div className="contact">
          <h1>Contact</h1>
          <div className="button-container">
              <div className="round-button">
                <div className="round-button-circle">
                  <a href="https://www.linkedin.com/in/jacob-han-02983011a/" className="round-button" />
                </div>
              </div>
              <div className="round-button">
                <div className="round-button-circle-gmail">
                  <a href="mailto:jacob.kj.han@gmail.com?Subject=Hello!" className="round-button" />
                </div>
              </div>
              <div className="round-button">
                <div className="round-button-circle-github">
                  <a href="https://www.github.com/jacobkjhan" className="round-button" />
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Contact;
