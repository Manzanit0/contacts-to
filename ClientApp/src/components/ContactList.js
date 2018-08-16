import React, { Component } from 'react';

export class ContactList extends Component {
  displayName = ContactList.name

  constructor(props) {
    super(props);
    this.state = { contacts: [], loading: true };

    fetch('api/contacts')
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data, loading: false });
      });
  }

  static renderForecastsTable(contacts) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact =>
            <tr key={contact.username}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ContactList.renderForecastsTable(this.state.contacts);

    return (
      <div>
        <h1>Contact List</h1>
        <p>This is a list of all the contacts in the system.</p>
        {contents}
      </div>
    );
  }
}
