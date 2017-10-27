import { combineReducers } from 'redux';
import products, * as productsSelectors from './products';
import customers, * as customersSelectors from './customers';
import activeExports from './activeExports';
import userUid from './userId';

const rootReducer = combineReducers({
    products,
    customers,
    activeExports,
    userUid,
});

export default rootReducer;

export const isUserSignedIn = state => !!state.userUid;
export const getProducts = state => productsSelectors.getAll(state.products);
export const getProduct = (state, productId) => productsSelectors.getProduct(state.products, productId);
export const isProductsDidInit = state => productsSelectors.isProductsDidInit(state.products);
export const isInitProducts = state => productsSelectors.isInitProducts(state.products);
export const getCustomers = state => customersSelectors.getAll(state.customers);
export const getCustomer = (state, customerId) => customersSelectors.getCustomer(state.customers, customerId);
export const isCustomersDidInit = state => customersSelectors.isCustomersDidInit(state.customers);
export const isInitCustomers = state => customersSelectors.isInitCustomers(state.customers);
export const getActiveExports = state => state.activeExports;
