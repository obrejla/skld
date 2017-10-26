import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ActiveExportProduct from './ActiveExportProduct';

const ActiveExportProducts = ({ products }) => (
    <Table>
        <tbody>
            {products.map(product => <ActiveExportProduct key={product.productId} id={product.productId} amount={product.amount} />)}
        </tbody>
    </Table>
);

ActiveExportProducts.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        productId: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    })).isRequired,
};

export default ActiveExportProducts;
