import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isUserSignedIn } from '../reducers';

const PrivateRoute = ({ component: Component, isSignedIn, ...rest }) => (
    <Route {...rest} render={props => (isSignedIn ? (<Component {...props} {...rest} />) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />))} />
);

PrivateRoute.propTypes = {
    isSignedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
    isSignedIn: isUserSignedIn(state),
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
