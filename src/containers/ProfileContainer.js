'use strict';

import React from 'react';
import Profile from './../pages/Profile';
import {Icon} from 'react-onsenui';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            user: JSON.parse(localStorage.getItem("user"))
        };
        console.log(props);
    };

    componentDidMount() {
        var sdo;
        var login;

        if(this.state.user){
            sdo = this.state.user.sdo;
            login = this.state.user.login;
        }else {
            sdo = this.props.routeParams.login;
            login = this.props.routeParams.login;
        }

        let url = localStorage.getItem('role') == 'student' ? 'http://localhost:8080/students/sdo/' + sdo : 'http://localhost:8080/lecturers/login/' + login;
        fetch(url)
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
            });

    };


    render() {
        return this.state.isLoading === true ? (
                <Profile/>
            ) : (
                <div><p>
                    <Icon style={{color: 'red'}} spin icon='md-spinner'/>
                </p></div>
            );
    };
}
;

module.exports = ProfileContainer;