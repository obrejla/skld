import { combineReducers } from 'redux';
import products, * as productsSelectors from './products';
import customers, * as customersSelectors from './customers';
import userUid from './userId';

const rootReducer = combineReducers({
    products,
    customers,
    userUid,
});

export default rootReducer;

export const isUserSignedIn = state => !!state.userUid;
export const getProducts = state => productsSelectors.getAll(state.products);
export const getProduct = (state, productId) => productsSelectors.getProduct(state.products, productId);
export const getCustomers = state => customersSelectors.getAll(state.customers);
export const getCustomer = (state, customerId) => customersSelectors.getCustomer(state.customers, customerId);
