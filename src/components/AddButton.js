import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumberModalDialog from './NumberModalDialog';
import { addProductAmount } from '../actions/index';

const AddButton = ({ addAmount }) => (
    <NumberModalDialog onProcess={addAmount} bsStyle="success" title="Increase Amount">+</NumberModalDialog>
);

AddButton.propTypes = {
    addAmount: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addAmount(amount) {
        dispatch(addProductAmount(ownProps.productId, amount));
    },
});

export default connect(null, mapDispatchToProps)(AddButton);
