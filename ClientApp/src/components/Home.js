import React, { Component } from 'react';
import { Jumbotron, Button, Carousel } from 'react-bootstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Contacts.To</h1>
          <p>
            Welcome to our cozy app. This is supposed to be some kind of messy addressbook to learn stuff.
        </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Carousel>
          <Carousel.Item>
            <img className="img-responsive center-block" width={640} height={453} src="/img/carousel/drawing.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block"  width={640} height={453} src="/img/carousel/meeting.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={640} height={453} src="/img/carousel/social.png" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
