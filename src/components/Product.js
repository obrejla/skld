import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ id, name, amount }) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{amount}</td>
    </tr>
);

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Product;
