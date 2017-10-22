import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../actions/index';
import { getProducts } from '../reducers/index';
import ProductsList from './ProductsList';

const mapStateToProps = state => ({
    products: getProducts(state),
});

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render() {
        return (
            <ProductsList products={this.props.products} />
        );
    }
}

ProductsContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            amount: PropTypes.number,
        }),
    ).isRequired,
};

export default connect(
    mapStateToProps,
)(ProductsContainer);
