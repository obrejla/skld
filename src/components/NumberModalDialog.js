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
        this.setState({
            isVisible: true,
        });
    }

    onClose() {
        this.setState({
            isVisible: false,
        });
    }

    onProcess() {
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
            <span>
                <Button bsStyle={bsStyle} onClick={this.onShow}>{children}</Button>
                <Modal show={this.state.isVisible} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline>
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
            </span>
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
    children: PropTypes.string.isRequired,
    onProcess: PropTypes.func.isRequired,
};

export default NumberModalDialog;
