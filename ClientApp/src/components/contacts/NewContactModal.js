import React, { Component } from 'react';
import { Modal, Glyphicon } from 'react-bootstrap';
import { NewContactForm } from "./NewContactForm";

export default class NewContactModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: this.props.show
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.show !== this.state.show) {
            this.setState({ show: nextProps.show });
        }
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <Glyphicon glyph='user' /> New contact
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewContactForm />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
