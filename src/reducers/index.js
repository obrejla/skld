import { combineReducers } from 'redux';
import products, * as productsSelectors from './products';
import customers, * as customersSelectors from './customers';

const rootReducer = combineReducers({
    products,
    customers,
});

export default rootReducer;

export const getProducts = state => productsSelectors.getAll(state.products);
export const getProduct = (state, productId) => productsSelectors.getProduct(state.products, productId);
export const getCustomers = state => customersSelectors.getAll(state.customers);
