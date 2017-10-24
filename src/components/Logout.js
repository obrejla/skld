import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignedOut } from '../actions/index';

class Logout extends Component {
    componentWillMount() {
        this.props.userSignedOut();
    }
    render() {
        return (
            <Redirect to="/login" />
        );
    }
}

Logout.propTypes = {
    userSignedOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    userSignedOut,
};

export default connect(null, mapDispatchToProps)(Logout);
