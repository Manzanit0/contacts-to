import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

export class ContactsCountBadge extends Component {
  displayName = ContactsCountBadge.name

  constructor(props) {
    super(props);
    this.state = { contacts: [] };

    fetch('api/contacts')
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data });
      });
  }

  render() {
    return (
        <Badge>{this.state.contacts.length}</Badge>
    );
  }
}
