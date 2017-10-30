import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initCustomers } from '../actions/index';
import { getCustomers } from '../reducers/index';

class CustomersContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(initCustomers());
    }

    render() {
        return (
            <div />
        );
    }
}

CustomersContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    customers: getCustomers(state),
});

export default connect(mapStateToProps)(CustomersContainer);
