'use strict';

import React from 'react';
import {Input} from 'react-onsenui';

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            password: event.target.value
        });
        this.props.password(event.target.value)
    };

    render() {
        return (
            <p className="button-request">
                <Input
                    type='text'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    modifier='material'
                    placeholder='Password'
                />
            </p>
        );
    };
}
;
module.exports = Password;
