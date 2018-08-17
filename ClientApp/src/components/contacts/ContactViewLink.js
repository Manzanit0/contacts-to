import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export class ContactViewLink extends Component {
    displayName = ContactViewLink.name

    render() {
        return (
            <LinkContainer
                to={{
                    pathname: `/contacts/${this.props.contact.username}/view`,
                    state: {
                        name: this.props.contact.username,
                        email: this.props.contact.email,
                        username: this.props.contact.username,
                        github: this.props.contact.github,
                        linkdin: this.props.contact.linkdin
                    }
                }}>
                <a>{this.props.contact.name}</a>
            </LinkContainer>
        );
    }
}