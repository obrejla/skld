import { combineReducers } from 'redux';
import {
    INIT_CUSTOMERS,
    UPDATE_CUSTOMERS,
} from '../actions/index';

const customers = (state = [], action) => {
    switch (action.type) {
        case UPDATE_CUSTOMERS:
            return action.customers;
        default:
            return state;
    }
};

export default combineReducers({
    customers,
});

export const getAll = state => state.customers;
export const getCustomer = (state, customerId) => state.customers.find(customer => customer.id === customerId);
