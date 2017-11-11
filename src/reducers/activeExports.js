import { ADD_ACTIVE_EXPORT, REMOVE_ACTIVE_EXPORT, UPDATE_ACTIVE_EXPORT } from '../actions';

const updateProducts = (state, action) => {
    let isNewProduct = true;
    const newProductsState = state.map((product) => {
        let prodResult = product;
        if (product.productId === action.productId) {
            isNewProduct = false;
            prodResult = {
                productId: action.productId,
                amount: product.amount + action.amount,
            };
        }
        return prodResult;
    });
    if (isNewProduct) {
        newProductsState.push({
            productId: action.productId,
            amount: action.amount,
        });
    }
    return newProductsState;
};

const updateActiveExports = (state = [], action) => (state.map((activeExport) => {
    let result = activeExport;
    if (activeExport.id === action.id) {
        const products = updateProducts(activeExport.products, action);
        result = {
            ...activeExport,
            products,
        };
    }
    return result;
}));

const activeExports = (state = [], action) => {
    switch (action.type) {
        case UPDATE_ACTIVE_EXPORT:
            return updateActiveExports(state, action);
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
            return state.filter(activeExport => activeExport.id !== action.id);
        default:
            return state;
    }
};

export default activeExports;
