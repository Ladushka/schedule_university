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
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <p className="button-request">
                <Input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    modifier='underbar'
                    placeholder='Пароль'
                />
            </p>
        );
    };
}
;
module.exports = Password;
