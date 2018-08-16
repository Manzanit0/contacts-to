import React, { Component } from 'react';

export class ContactsTable extends Component {
  displayName = ContactsTable.name

  constructor(props) {
    super(props);
    this.state = { contacts: [], loading: true };

    fetch('api/contacts')
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data, loading: false });
      });
  }

  static renderTableResult(contacts) {
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
      : ContactsTable.renderTableResult(this.state.contacts);

    return (
      <div>
        {contents}
      </div>
    );
  }
}
