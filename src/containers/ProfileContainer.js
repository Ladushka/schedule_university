'use strict';

import React from 'react';
import Profile from './../pages/Profile';
import {Icon} from 'react-onsenui';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            user: ''
        }

    };

    componentDidMount() {
        console.log('work!');
        if (localStorage.getItem('role') != 'student') {

            fetch('http://localhost:8080/lecturers/login/' + this.props.routeParams.login)
                .then(response => {
                    return response.text();
                })
                .then(text => {
                    console.log('Request successful', text);
                    localStorage.setItem('user', JSON.stringify(JSON.parse(text)));
                    this.setState({
                        user: JSON.parse(text),
                        isLoading: true
                    });
                })
                .catch(error => {
                    console.log('Request failed', error)
                })
        }

        /*
         загрузи студента по sdo_id
         не забудь про localStorage
         */
    };

    render() {
        return this.state.isLoading === true ? (
                <Profile />
            ) : (
                <div><p>
                    <Icon style={{color: 'red'}} spin icon='md-spinner'/>
                </p></div>
            );
    };
}
;

module.exports = ProfileContainer;