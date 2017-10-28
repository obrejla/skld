import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import PossibleExports from './PossibleExports';
import ExportAmount from './ExportAmount';
import { removeProductAmount, addActiveExport, updateActiveExport } from '../actions/index';

class ExportModalDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            activeExportId: null,
            newExportCustomerId: null,
        };
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onActiveExportIdChanged = this.onActiveExportIdChanged.bind(this);
        this.onNewExportCustomerId = this.onNewExportCustomerId.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps() {
        // reset the state when Modal is shown again
        this.setState({
            amount: 0,
            activeExportId: null,
            newExportCustomerId: null,
        });
    }

    onAmountChange(amount) {
        this.setState({
            amount,
        });
    }

    onActiveExportIdChanged(activeExportId) {
        this.setState({
            activeExportId,
        });
    }

    onNewExportCustomerId(newExportCustomerId) {
        this.setState({
            newExportCustomerId,
        });
    }

    onClick() {
        const { amount, newExportCustomerId, activeExportId } = this.state;
        this.props.removeAmount(amount);
        if (newExportCustomerId) {
            this.props.createActiveExport(newExportCustomerId, amount);
        } else if (activeExportId) {
            this.props.updateActiveExport(activeExportId, amount);
        }
        this.props.onClose();
    }

    isValid() {
        return this.state.amount > 0
                && (this.state.activeExportId || this.state.newExportCustomerId)
                && !(this.state.activeExportId && this.state.newExportCustomerId);
    }

    render() {
        const { onShow, onClose } = this.props;
        return (
            <Modal show={onShow} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Export Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExportAmount amount={this.state.amount} onAmountChange={this.onAmountChange} />
                    <PossibleExports onActiveExportIdChanged={this.onActiveExportIdChanged} onNewExportCustomerId={this.onNewExportCustomerId} />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.onClick} disabled={!(this.isValid())}>OK</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ExportModalDialog.propTypes = {
    onShow: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    removeAmount: PropTypes.func.isRequired,
    createActiveExport: PropTypes.func.isRequired,
    updateActiveExport: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeAmount(amount) {
        dispatch(removeProductAmount(ownProps.productId, amount));
    },
    createActiveExport(customerId, amount) {
        dispatch(addActiveExport(customerId, ownProps.productId, amount));
    },
    updateActiveExport(activeExportId, amount) {
        dispatch(updateActiveExport(activeExportId, ownProps.productId, amount));
    },
});

export default connect(null, mapDispatchToProps)(ExportModalDialog);
