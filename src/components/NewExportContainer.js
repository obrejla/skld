import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewExport from './NewExport';
import { getCustomers } from '../reducers';
import { initCustomers } from '../actions';

class NewExportContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    componentWillMount() {
        this.props.initCustomers();
    }

    onSelect(customerId) {
        this.props.onNewExportCustomerId(customerId);
    }

    render() {
        return (
            <NewExport customers={this.props.customers} onSelect={this.onSelect} />
        );
    }
}

NewExportContainer.propTypes = {
    onNewExportCustomerId: PropTypes.func.isRequired,
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
