import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewExport from './NewExport';
import { getCustomers } from '../reducers/index';
import { initCustomers } from '../actions/index';

class NewExportContainer extends React.Component {
    componentWillMount() {
        this.props.initCustomers();
    }

    render() {
        return (
            <NewExport customers={this.props.customers} />
        );
    }
}

NewExportContainer.propTypes = {
    initCustomers: PropTypes.func.isRequired,
    customers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
    })).isRequired,
};

const mapStateToProps = state => ({
    customers: getCustomers(state),
});

const mapDispatchToProps = {
    initCustomers,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewExportContainer);
