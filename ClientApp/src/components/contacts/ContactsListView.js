import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ContactsTable } from './ContactsTable';
import NewContactModal from './NewContactModal';


export class ContactsListView extends Component {
    displayName = ContactsListView.name

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ show: true }); // This doesn't work
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <p>This is a list of all the contacts in the system.</p>
                <ContactsTable />
                <Button bsStyle="primary" onClick={this.handleShow}>Add Contact</Button>

                <NewContactModal show={this.state.show}/>
            </div>
        );
    }
}
