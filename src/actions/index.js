import uuid from 'uuid';
import { fbdb } from '../firebase';
import * as selectors from '../reducers/index';

export const ADD_ACTIVE_EXPORT = 'ADD_ACTIVE_EXPORT';
export const addActiveExport = (customerId, productId, amount) => ({
    type: ADD_ACTIVE_EXPORT,
    id: uuid(),
    customerId,
    productId,
    amount,
});
export const REMOVE_ACTIVE_EXPORT = 'REMOVE_ACTIVE_EXPORT';
export const removeActiveExport = id => ({
    type: REMOVE_ACTIVE_EXPORT,
    id,
});

const USER_UID_KEY = 'user_uid';
export const getInirUserUid = () => localStorage.getItem(USER_UID_KEY);
export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export const userSignedIn = (userUid) => {
    localStorage.setItem(USER_UID_KEY, userUid);
    return {
        type: USER_SIGNED_IN,
        userUid,
    };
};
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT';
export const userSignedOut = () => {
    localStorage.removeItem(USER_UID_KEY);
    return {
        type: USER_SIGNED_OUT,
    };
};

export const ADD_PRODUCT_AMOUNT = 'ADD_PRODUCT_AMOUNT';
export const addProductAmount = (productId, amount) => (dispatch, getState) => {
    const state = getState();
    const product = selectors.getProduct(state, productId);
    const newAmount = product.amount + amount;
    dispatch({
        type: ADD_PRODUCT_AMOUNT,
        product_id: productId,
        amount: newAmount,
    });

    fbdb.ref(`products/${productId}/amount`).set(newAmount);
};

export const REMOVE_PRODUCT_AMOUNT = 'REMOVE_PRODUCT_AMOUNT';
export const removeProductAmount = (productId, amount) => (dispatch, getState) => {
    const state = getState();
    const product = selectors.getProduct(state, productId);
    const newAmount = product.amount - amount;
    dispatch({
        type: REMOVE_PRODUCT_AMOUNT,
        product_id: productId,
        amount: newAmount,
    });

    fbdb.ref(`products/${productId}/amount`).set(newAmount);
};

export const INIT_PRODUCTS = 'INIT_PRODUCTS';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const initProducts = () => (dispatch, getState) => {
    if (!selectors.isProductsDidInit(getState())) {
        dispatch({
            type: INIT_PRODUCTS,
        });

        fbdb.ref('products').on('value', (snapshot) => {
            const productsObj = snapshot.val();
            const products = [];
            Object.keys(productsObj).forEach(key => products.push({
                id: key,
                name: productsObj[key].name,
                amount: productsObj[key].amount,
            }));
            dispatch({
                type: UPDATE_PRODUCTS,
                products,
            });
        });
    }
};

export const INIT_CUSTOMERS = 'INIT_CUSTOMERS';
export const UPDATE_CUSTOMERS = 'UPDATE_CUSTOMERS';
export const initCustomers = () => (dispatch) => {
    dispatch({
        type: INIT_CUSTOMERS,
    });

    fbdb.ref('customers').on('value', (snapshot) => {
        const customersObj = snapshot.val();
        const customers = [];
        Object.keys(customersObj).forEach(key => customers.push({
            id: key,
            first_name: customersObj[key].first_name,
            surname: customersObj[key].surname,
        }));
        dispatch({
            type: UPDATE_CUSTOMERS,
            customers,
        });
    });
};
