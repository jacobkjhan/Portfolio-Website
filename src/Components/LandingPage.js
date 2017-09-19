import React, { Component } from 'react';
import Name from './NameAnimation';

class LandingPage extends Component {

  render(){
    return (
      <div className="landing-page">
        <div className="name-center">
            <Name />
        </div>
      </div>
    );
  }
}

export default LandingPage;
