import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Product from './Product';

const ProductsList = ({ products }) => (
    <ListGroup componentClass="ul">
        {
            products.map(product => <Product key={product.id} id={product.id} name={product.name} amount={product.amount} />)
        }
    </ListGroup>
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
