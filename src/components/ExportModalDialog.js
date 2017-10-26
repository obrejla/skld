import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import PossibleExports from './PossibleExports';

const ExportModalDialog = ({ onShow, onClose }) => (
    <Modal show={onShow} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Export Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <PossibleExports />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onClose} bsStyle="primary">Cancel</Button>
        </Modal.Footer>
    </Modal>
);

ExportModalDialog.propTypes = {
    onShow: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ExportModalDialog;
