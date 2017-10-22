import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

const Product = ({ id, name, amount }) => (
    <tr>
        <td>{name}</td>
        <td>{amount}</td>
        <td>
            <AddButton productId={id} />
            <RemoveButton productId={id} />
        </td>
    </tr>
);

Product.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Product;
