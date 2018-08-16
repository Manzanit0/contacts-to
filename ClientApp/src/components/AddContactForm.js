import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Well } from 'react-bootstrap';

export class AddContactForm extends Component {
    displayName = AddContactForm.name

    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            username: ''
        };
    }

    handleClick() {
        var opts = {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.username,
                email: this.state.email
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch('api/contacts', opts)
            .then(response => response.json())
            .then(data => {
                console.log('Added!')
            });
    }

    render() {
        return (
            <Well className="mx-auto" style={{ margin: '20px' }}>
                <Form horizontal>
                    <FormGroup controlId="formName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Name" onChange={(evt) => this.setState({name:evt.target.value})}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formUsername">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Username" onChange={(evt) => this.setState({username:evt.target.value})}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={(evt) => this.setState({email:evt.target.value})}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={(event) => this.handleClick(event)}>Add</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Well>
        );
    }
}
