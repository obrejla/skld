import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({
        subscribe: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    }).isRequired,
};

export default Root;
