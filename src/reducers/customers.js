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

export default customers;

export const getAll = state => state;
export const getCustomer = (state, customerId) => state.find(customer => customer.id === customerId);
