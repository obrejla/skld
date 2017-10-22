import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../actions/index';

const products = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.products;
        default:
            return state;
    }
};

export default products;

export const getAll = state => state;
