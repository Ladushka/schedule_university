'use strict';

import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router'

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit() {
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.user)
        });

        event.preventDefault();

        this.props.router.push({
            pathname: '/student/' + this.props.user.sdo_id
        });
    };

    render() {
        return (
            <p>
                <Button onClick={this.handleSubmit}>Add User</Button>
            </p>
        );
    };
}
;
module.exports = withRouter(AddUser);
