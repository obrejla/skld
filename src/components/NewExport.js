import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const DEFAULT_VALUE = '__default';

class NewExport extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const optionValue = event.target.value;
        const customerId = optionValue !== DEFAULT_VALUE && optionValue;
        this.props.onSelect(customerId);
    }

    render() {
        const { customers } = this.props;
        return (
            <div>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Create new export for customer</ControlLabel>
                    <FormControl componentClass="select" onChange={this.onChange}>
                        <option value={DEFAULT_VALUE}>-----</option>
                        {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.surname}, {customer.first_name}</option>)}
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

NewExport.propTypes = {
    customers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default NewExport;
