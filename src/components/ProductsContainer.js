import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initProducts } from '../actions';
import { getProducts } from '../reducers';
import ProductsList from './ProductsList';

class ProductsContainer extends Component {
    componentDidMount() {
        this.props.initProducts();
    }

    render() {
        return (
            <ProductsList products={this.props.products} />
        );
    }
}

ProductsContainer.propTypes = {
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
});

const mapDispatchToProps = {
    initProducts,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsContainer);
