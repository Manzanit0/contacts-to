import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <Jumbotron>
        <h1>Contacts.To</h1>
        <p>
          Welcome to our cozy app. This is supposed to be some kind of messy addressbook to learn stuff.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}
