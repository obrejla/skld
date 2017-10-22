import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import ProductsContainer from './ProductsContainer';
import CustomersContainer from './CustomersContainer';

const App = () => (
    <div>
        <Menu />
        <div className="container">
            <Route path="/products" component={ProductsContainer} />
            <Route path="/customers" component={CustomersContainer} />
        </div>
    </div>
);

export default App;
