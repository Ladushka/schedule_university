'use strict';

import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router'

import UserService from '../services/UserService'


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit() {
        this.setState({
            onClick: true
        });
    };

    render() {
        return (
            <section>
                <p>
                    <Button onClick={this.handleSubmit}>Add User</Button>
                </p>
                {
                    (this.state.onClick === true) ? (<UserService user={this.props.user}/>) : (null)
                }
            </section>

        );
    }
}
;
module.exports = withRouter(AddUser);
