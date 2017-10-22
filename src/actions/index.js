const API_LINK = 'http://localhost:3001';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: FETCH_PRODUCTS_REQUEST,
    });

    return fetch(`${API_LINK}/products`).then(
        response => response.json(),
        error => dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            error,
        }),
    ).then((products) => {
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
