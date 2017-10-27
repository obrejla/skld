import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const NewExport = ({ customers }) => (
    <div>
        Create new export for customer:
        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
                {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.surname}, {customer.first_name}</option>)}
            </FormControl>
        </FormGroup>
    </div>
);

NewExport.propTypes = {
    customers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
    })).isRequired,
};

export default NewExport;
