import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import ExportModalDialog from './ExportModalDialog';

class ExportButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        this.onShow = this.onShow.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onShow() {
        if (!this.state.isVisible) {
            this.setState({
                isVisible: true,
            });
        }
    }

    onClose() {
        this.setState({
            isVisible: false,
        });
    }

    render() {
        return (
            <Button componentClass="a" onClick={this.onShow} bsStyle="danger" block>
                <Glyphicon glyph="export" />
                <ExportModalDialog onShow={this.state.isVisible} onClose={this.onClose} />
            </Button>
        );
    }
}

export default ExportButton;
