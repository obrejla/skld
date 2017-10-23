import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const configureStore = () => createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware),
    ),
);

export default configureStore;
