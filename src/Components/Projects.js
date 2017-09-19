import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';


class Projects extends Component {

    render(){
      return (
        <div className="projects">
          <Reveal effect="animated slideInRight">
            <div className="project-background">
                <h1 style={{margin: 0}}>Projects</h1>
                <Reveal effect="animated bounceInUp">
                  <Grid>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                        <div className="project-grid">
                        <Card>
                          <Image className="project-image" src='http://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg' href="http://google.com"/>
                          <Card.Content>
                            <Card.Header>
                              Header
                            </Card.Header>
                            <Card.Description>
                              Description
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="project-grid">
                        <Card>
                          <Image className="project-image" src='http://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg' href="http://google.com"/>
                          <Card.Content>
                            <Card.Header>
                              Header
                            </Card.Header>
                            <Card.Description>
                              Description
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        </div>
                      </Grid.Column>
                      <Grid.Column>
                        <div className="project-grid">
                        <Card>
                          <Image className="project-image" src='http://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg' href="http://google.com"/>
                          <Card.Content>
                            <Card.Header>
                              Header
                            </Card.Header>
                            <Card.Description>
                              Description
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Reveal>
            </div>
          </Reveal>
        </div>
      );
    }
  }

  export default Projects;
