import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
