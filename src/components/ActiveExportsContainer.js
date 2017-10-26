import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ActiveExport from './ActiveExport';
import { getActiveExports } from '../reducers/index';

class ActiveExportsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedExportId: null,
        };
        this.onExportSelect = this.onExportSelect.bind(this);
    }

    onExportSelect(id) {
        this.setState({
            selectedExportId: id,
        });
    }

    render() {
        return (
            <ListGroup>
                {
                    this.props.activeExports.map(activeExport => (<ActiveExport
                        key={activeExport.id}
                        isActive={this.state.selectedExportId === activeExport.id}
                        onExportSelect={this.onExportSelect}
                        activeExport={activeExport}
                    />))
                }
            </ListGroup>
        );
    }
}

ActiveExportsContainer.propTypes = {
    activeExports: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            customerId: PropTypes.string.isRequired,
            products: PropTypes.arrayOf(PropTypes.shape({
                productId: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
            })).isRequired,
        }),
    ).isRequired,
};

const mapStateToProps = state => ({
    activeExports: getActiveExports(state),
});

export default connect(mapStateToProps)(ActiveExportsContainer);
