import { combineReducers } from 'redux';
import {
    INIT_PRODUCTS,
    UPDATE_PRODUCTS,
    ADD_PRODUCT_AMOUNT,
    REMOVE_PRODUCT_AMOUNT,
} from '../actions';

const initProducts = (state = false, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return true;
        case UPDATE_PRODUCTS:
            return false;
        default:
            return state;
    }
};

const productsDidInit = (state = false, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return true;
        default:
            return state;
    }
};

const products = (state = [], action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return action.products;
        case ADD_PRODUCT_AMOUNT:
        case REMOVE_PRODUCT_AMOUNT:
            return state.map((product) => {
                let result = product;
                if (product.id === action.product_id) {
                    result = modifyProductAmount(product, action);
                }
                return result;
            });
        default:
            return state;
    }
};

const modifyProductAmount = (product = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_AMOUNT:
            return {
                ...product,
                amount: action.amount,
            };
        case REMOVE_PRODUCT_AMOUNT:
            return {
                ...product,
                amount: action.amount,
            };
        default:
            return product;
    }
};

export default combineReducers({
    initProducts,
    productsDidInit,
    products,
});

export const getAll = state => state.products;
export const getProduct = (state, productId) => state.products.find(product => product.id === productId);
export const isProductsDidInit = state => state.productsDidInit;
export const isInitProducts = state => state.initProducts;
