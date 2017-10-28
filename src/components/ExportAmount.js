import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ExportAmount extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.onAmountChange(parseInt(event.target.value, 10) || 0);
    }

    render() {
        return (
            <FormGroup controlId="formInlineAmount">
                <ControlLabel>Amount</ControlLabel>
                {' '}
                <FormControl autoFocus type="text" placeholder="0" value={this.props.amount || ''} onChange={this.onChange} />
            </FormGroup>
        );
    }
}

ExportAmount.propTypes = {
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func.isRequired,
};

export default ExportAmount;
