'use strict';

import React from 'react';
import LogIn from './../components/LogIn'

class LogInContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
            exception: ''
        };
    };

    componentDidMount() {
        fetch('http://localhost:8080/users/login/' + this.props.data.login)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                if (this.props.data.password == JSON.parse(text).password) {
                    this.setState({
                        logged_in: true
                    });
                } else {
                    this.setState({
                        exception: 'password'
                    });
                }
            })
            .catch(error => {
                this.setState({
                    exception: 'login'
                });
                console.log('Request failed', error)
            });
    };

    render() {
        return (
            <LogIn response={this.state}/>
        );
    };
}
;
module.exports = LogInContainer;
