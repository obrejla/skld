import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class NumberModalDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            amount: 0,
        };

        this.onShow = this.onShow.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onProcess = this.onProcess.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onShow() {
        if (!this.state.isVisible) {
            this.setState({
                isVisible: true,
            });
        }
    }

    onClose(event) {
        if (event) {
            event.stopPropagation();
        }
        this.setState({
            isVisible: false,
        });
    }

    onProcess(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onProcess(this.state.amount);
        this.setState({
            isVisible: false,
            amount: 0,
        });
    }

    onChange(event) {
        this.setState({
            amount: parseInt(event.target.value, 10),
        });
    }

    render() {
        const {
            bsStyle,
            title,
            children,
        } = this.props;
        return (
            <Button block href="#" bsStyle={bsStyle} onClick={this.onShow}>
                {children}
                <Modal show={this.state.isVisible} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline onSubmit={this.onProcess}>
                            <FormGroup controlId="formInlineAmount">
                                <ControlLabel>Amount</ControlLabel>
                                {' '}
                                <FormControl type="text" placeholder="1" onChange={this.onChange} />
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onProcess}>OK</Button>
                        <Button onClick={this.onClose} bsStyle="primary">Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </Button>
        );
    }
}

NumberModalDialog.defaultProps = {
    bsStyle: '',
    title: 'Modify Amount',
};

NumberModalDialog.propTypes = {
    bsStyle: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onProcess: PropTypes.func.isRequired,
};

export default NumberModalDialog;
