import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumberModalDialog from '../components/NumberModalDialog';
import { removeProductAmount } from '../actions/index';

const RemoveButton = ({ removeAmount }) => (
    <NumberModalDialog onProcess={removeAmount} bsStyle="danger" title="Decrease Amount"><Glyphicon glyph="export" /></NumberModalDialog>
);

RemoveButton.propTypes = {
    removeAmount: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeAmount(amount) {
        dispatch(removeProductAmount(ownProps.productId, amount));
    },
});

export default connect(null, mapDispatchToProps)(RemoveButton);
