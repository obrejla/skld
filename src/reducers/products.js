import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT_AMOUNT,
    REMOVE_PRODUCT_AMOUNT,
} from '../actions/index';

const products = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
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

export default products;

export const getAll = state => state;
export const getProduct = (state, productId) => state.find(product => product.id === productId);
