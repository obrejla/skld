import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Product from './Product';

const ProductsList = ({ products }) => (
    <Table striped>
        <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th />
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => <Product key={product.id} id={product.id} name={product.name} amount={product.amount} />)
            }
        </tbody>
    </Table>
);

ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            amount: PropTypes.number,
        }),
    ).isRequired,
};

export default ProductsList;
