'use strict';

import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router'

import AddUserContainer from './../containers/AddUserContainer'


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // componentWillMount() {
    //     fetch('http://localhost:8080/users')
    //         .then(response => {
    //             return response.text();
    //         })
    //         .then(text => {
    //             this.setState({
    //                 userCount: JSON.parse(text).length
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log('Request failed', error)
    //         });
    // };

    handleSubmit() {
        this.setState({
            onClick: true
        });
        console.log(this.props.user);
        // let lecturer = this.props.user.lecturer;
        // delete this.props.user.lecturer;
        // let user = this.props.user;
        // console.log(user);
        // console.log(lecturer);
        // if (this.props.user.role === 'lecturer') {
        //     user.login = lecturer.surname + lecturer.name.charAt(0) + lecturer.patronymic.charAt(0);
        //     lecturer.lecture_id = 0;
        //     lecturer.login = user.login;
        //     user.sdo_id = this.state.userCount;
        /*
         fetch('http://localhost:8080/lecturers', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify(lecturer)
         })
         .then(response => {
         if (response.status == 200) {
         localStorage.setItem('logged-in', true);
         return;
         }
         }
         );
         */
    };

    render() {
        return (
            <section>
                <p>
                    <Button onClick={this.handleSubmit}>Add User</Button>
                </p>
                {
                    (this.state.onClick === true) ? (<AddUserContainer user={this.props.user}/>) : (null)
                }
            </section>

        );
    }
}
;
module.exports = withRouter(AddUser);
