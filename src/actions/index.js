import { fbdb } from '../firebase';
import * as selectors from '../reducers/index';

const API_LINK = 'http://localhost:3001';

export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export const userSignedIn = user => ({
    type: USER_SIGNED_IN,
    user,
});

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

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: FETCH_PRODUCTS_REQUEST,
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
            type: FETCH_PRODUCTS_SUCCESS,
            products,
        });
    });
};

export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
export const fetchCustomers = () => (dispatch) => {
    dispatch({
        type: FETCH_CUSTOMERS_REQUEST,
    });

    return fetch(`${API_LINK}/customers`).then(
        response => response.json(),
        error => dispatch({
            type: FETCH_CUSTOMERS_FAILURE,
            error,
        }),
    ).then((customers) => {
        dispatch({
            type: FETCH_CUSTOMERS_SUCCESS,
            customers,
        });
    });
};
