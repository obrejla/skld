import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import ActiveExport from '../containers/ActiveExport';

const ActiveExports = ({ activeExports, selectedExportId, onExportSelect }) => (
    <div>
        {activeExports.length > 0 &&
        <div>
            Add this export to the existing transaction?
            <ListGroup>
                {
                    activeExports.map(activeExport => (<ActiveExport
                        key={activeExport.id}
                        isActive={selectedExportId === activeExport.id}
                        onExportSelect={onExportSelect}
                        activeExport={activeExport}
                    />))
                }
            </ListGroup>
        </div>
        }
    </div>
);

ActiveExports.defaultProps = {
    selectedExportId: null,
};

ActiveExports.propTypes = {
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
    selectedExportId: PropTypes.string,
    onExportSelect: PropTypes.func.isRequired,
};

export default ActiveExports;
