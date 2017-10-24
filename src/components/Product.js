import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonGroup } from 'react-bootstrap';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

const Product = ({ id, name, amount }) => (
    <li className="list-group-item">
        <Row>
            <Col md={3}><h4>{name}</h4></Col>
            <Col md={7}><h5>{amount}</h5></Col>
            <Col md={2}>
                <ButtonGroup justified>
                    <AddButton productId={id} />
                    <RemoveButton productId={id} />
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
