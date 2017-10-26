import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap';
import ActiveExportProducts from './ActiveExportProducts';
import { getCustomer } from '../reducers/index';

const ActiveExport = ({
    activeExport,
    customerName,
    onExportSelect,
    isActive,
}) => (
    <ListGroupItem active={isActive} onClick={() => { onExportSelect(activeExport.id); }}>
        <h4 className="list-group-item-heading">{customerName}</h4>
        <ActiveExportProducts products={activeExport.products} />
    </ListGroupItem>
);

ActiveExport.propTypes = {
    activeExport: PropTypes.shape({
        id: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(PropTypes.shape({
            productId: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    customerName: PropTypes.string.isRequired,
    onExportSelect: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const customer = getCustomer(state, ownProps.activeExport.customerId);
    return {
        customerName: `${customer.surname}, ${customer.first_name}`,
    };
};

export default connect(mapStateToProps)(ActiveExport);
