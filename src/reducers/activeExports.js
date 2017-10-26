import { ADD_ACTIVE_EXPORT, REMOVE_ACTIVE_EXPORT } from '../actions/index';

const currentExportTransactions = (state = [], action) => {
    switch (action.type) {
        case ADD_ACTIVE_EXPORT:
            return [
                ...state,
                {
                    id: action.id,
                    customerId: action.customerId,
                    products: [{
                        productId: action.productId,
                        amount: action.amount,
                    }],
                },
            ];
        case REMOVE_ACTIVE_EXPORT:
            return state.filter(transaction => transaction.id === action.id);
        default:
            return state;
    }
};

export default currentExportTransactions;
