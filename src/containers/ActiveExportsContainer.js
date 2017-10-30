import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActiveExports } from '../reducers/index';
import ActiveExports from '../components/ActiveExports';

class ActiveExportsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedExportId: null,
        };
        this.onExportSelect = this.onExportSelect.bind(this);
    }

    onExportSelect(id) {
        this.setState((prevState) => {
            const newSelectedId = prevState.selectedExportId === id ? null : id;
            this.props.onActiveExportIdChanged(newSelectedId);
            return {
                selectedExportId: newSelectedId,
            };
        });
    }

    render() {
        return (
            <ActiveExports
                activeExports={this.props.activeExports}
                selectedExportId={this.state.selectedExportId}
                onExportSelect={this.onExportSelect}
            />
        );
    }
}

ActiveExportsContainer.propTypes = {
    onActiveExportIdChanged: PropTypes.func.isRequired,
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
