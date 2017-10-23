import { FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS } from '../actions/index';

const customers = (state = [], action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_SUCCESS:
            return action.customers;
        default:
            return state;
    }
};

export default customers;

export const getAll = state => state;
