import React, { Component } from 'react';
import { PageHeader, Row, Col, FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';

export class ContactView extends Component {
    displayName = ContactView.name

    constructor(props) {
        super(props);

        // TODO: if we don't have the state, try GET the contact, if fails, then finally redirect to contact list.

        // If we don't have the state, redirect to the contact list.
        if (this.props.location.state !== undefined) {
            this.state = {
                email: this.props.location.state.email,
                username: this.props.location.state.username,
                name: this.props.location.state.name,
                github: this.props.location.state.github,
                linkdin: this.props.location.state.linkdin,
                position: "Software Engineer"
            }
        }
    }

    render() {
        if (this.props.location.state === undefined) {
            return (
                <Redirect
                    to={{
                        pathname: "/contacts",
                        state: { from: this.props.location }
                    }}
                />
            );
        }
        return (
            <div>
                <PageHeader>
                    {this.state.name}
                    <br />
                    <small>{this.state.position}</small>
                </PageHeader>
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Username</ControlLabel>
                                <FormControl.Static>{this.state.username}</FormControl.Static>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl.Static>{this.state.email}</FormControl.Static>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Github</ControlLabel>
                                <FormControl.Static>{this.state.github}</FormControl.Static>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>LinkdIn</ControlLabel>
                                <FormControl.Static>{this.state.linkdin}</FormControl.Static>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}