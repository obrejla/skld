import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../reducers/index';

const ActiveExportProduct = ({ name, amount }) => (
    <tr>
        <th>{name}</th>
        <td>{amount}&times;</td>
    </tr>
);

ActiveExportProduct.propTypes = {
    amount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    name: getProduct(state, ownProps.id).name,
});

export default connect(mapStateToProps)(ActiveExportProduct);
