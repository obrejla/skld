import React from 'react';
import PropTypes from 'prop-types';
import ActiveExportsContainer from './ActiveExportsContainer';
import NewExportContainer from './NewExportContainer';

const PossibleExports = ({ onActiveExportIdChanged, onNewExportCustomerId }) => (
    <div>
        <ActiveExportsContainer onActiveExportIdChanged={onActiveExportIdChanged} />
        <NewExportContainer onNewExportCustomerId={onNewExportCustomerId} />
    </div>
);

PossibleExports.propTypes = {
    onActiveExportIdChanged: PropTypes.func.isRequired,
    onNewExportCustomerId: PropTypes.func.isRequired,
};

export default PossibleExports;
