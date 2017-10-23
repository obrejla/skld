import { combineReducers } from 'redux';
import products, * as productsSelectors from './products';
import customers, * as customersSelectors from './customers';
import users from './users';

const rootReducer = combineReducers({
    products,
    customers,
    users,
});

export default rootReducer;

export const isUserSignedIn = state => !!state.users;
export const getProducts = state => productsSelectors.getAll(state.products);
export const getProduct = (state, productId) => productsSelectors.getProduct(state.products, productId);
export const getCustomers = state => customersSelectors.getAll(state.customers);
