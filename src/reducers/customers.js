import { combineReducers } from 'redux';
import {
    INIT_CUSTOMERS,
    UPDATE_CUSTOMERS,
} from '../actions';

const initCustomers = (state = false, action) => {
    switch (action.type) {
        case INIT_CUSTOMERS:
            return true;
        case UPDATE_CUSTOMERS:
            return false;
        default:
            return state;
    }
};

const customersDidInit = (state = false, action) => {
    switch (action.type) {
        case INIT_CUSTOMERS:
            return true;
        default:
            return state;
    }
};

const customers = (state = [], action) => {
    switch (action.type) {
        case UPDATE_CUSTOMERS:
            return action.customers;
        default:
            return state;
    }
};

export default combineReducers({
    initCustomers,
    customersDidInit,
    customers,
});

export const getAll = state => state.customers;
export const getCustomer = (state, customerId) => state.customers.find(customer => customer.id === customerId);
export const isCustomersDidInit = state => state.customersDidInit;
export const isInitCustomers = state => state.initCustomers;
