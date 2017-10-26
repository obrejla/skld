import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonGroup } from 'react-bootstrap';
import AddButton from './AddButton';
import ExportButton from './ExportButton';

const getColorClass = (amount) => {
    let result = '';
    if (amount < 6) {
        result = 'list-group-item-warning';
        if (amount === 0) {
            result = 'list-group-item-danger';
        }
    }
    return result;
};

const Product = ({ id, name, amount }) => (
    <li className={`list-group-item ${getColorClass(amount)}`}>
        <Row>
            <Col md={3}><h4>{name}</h4></Col>
            <Col md={7}><h5>{amount}</h5></Col>
            <Col md={2}>
                <ButtonGroup justified>
                    <AddButton productId={id} />
                    <ExportButton productId={id} />
                </ButtonGroup>
            </Col>
        </Row>
    </li>
);

Product.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Product;
