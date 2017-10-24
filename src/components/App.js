import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Menu from './Menu';
import ProductsContainer from './ProductsContainer';
import CustomersContainer from './CustomersContainer';
import Login from './Login';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';

const App = () => (
    <div>
        <Menu />
        <div className="container">
            <Switch>
                <PrivateRoute exact path="/products" component={ProductsContainer} />
                <PrivateRoute exact path="/customers" component={CustomersContainer} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Redirect from="/" to="/products" />
            </Switch>
        </div>
    </div>
);

export default App;
