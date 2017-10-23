import 'firebaseui/dist/firebaseui.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { userSignedIn } from '../actions/index';
import { isUserSignedIn } from '../reducers/index';

const authUi = new firebaseui.auth.AuthUI(firebase.auth());

class Login extends Component {
    constructor(params) {
        super(params);
        this.state = {
            from: false,
        };
    }

    componentDidMount() {
        const { onSignIn, location } = this.props;
        let from = localStorage.getItem('from');
        if (!from) {
            const { from: fromPage } = location.state || { from: { pathname: '/' } };
            localStorage.setItem('from', fromPage);
            from = fromPage;
        }
        const uiConfig = {
            callbacks: {
                signInSuccess: () => {
                    onSignIn(true);
                    this.setState({
                        from,
                    });
                },
            },
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
        };
        authUi.start('#firebaseui-auth', uiConfig);
    }

    componentWillUnmount() {
        authUi.reset();
    }

    render() {
        return (
            this.state.from
                ? <Redirect to={this.state.from} />
                : <div id="firebaseui-auth" />
        );
    }
}

Login.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    location: PropTypes.shape({
        state: PropTypes.any,
    }).isRequired,
};

const mapStateToProps = state => ({
    isSignedIn: isUserSignedIn(state),
});

const mapDispatchToProps = dispatch => ({
    onSignIn: (user) => {
        dispatch(userSignedIn(user));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
