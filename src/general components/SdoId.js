'use strict';

import React from 'react';
import {Input} from 'react-onsenui';

class SdoId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sdo_id: '',
            login: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <p className="button-request">
                <Input
                    type='text'
                    name={this.props.name === 'student' ? 'sdo_id' : 'login'}
                    value={this.props.name === 'student' ? this.props.sdo_id : this.props.login}
                    onChange={this.handleInputChange}
                    modifier='material'
                    placeholder={this.props.name === 'student' ? 'Sdo Id' : 'Login'}
                />
            </p>
        );
    }
}
;
module.exports = SdoId;
