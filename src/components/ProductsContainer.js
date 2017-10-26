import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initProducts } from '../actions/index';
import { getProducts, isProductsDidInit } from '../reducers/index';
import ProductsList from './ProductsList';

class ProductsContainer extends Component {
    componentDidMount() {
        if (!this.props.isProductsDidInit) {
            this.props.initProducts();
        }
    }

    render() {
        return (
            <ProductsList products={this.props.products} />
        );
    }
}

ProductsContainer.propTypes = {
    isProductsDidInit: PropTypes.bool.isRequired,
    initProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            amount: PropTypes.number,
        }),
    ).isRequired,
};

const mapStateToProps = state => ({
    products: getProducts(state),
    isProductsDidInit: isProductsDidInit(state),
});

const mapDispatchToProps = {
    initProducts,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsContainer);
