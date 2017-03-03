'use strict';

'use strict';

import React from 'react';
import StudentForm from '../pages/StudentForm'
import LectureService from './LectureService'

class UserService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            lecturer: this.props.user.lecturer
        }

    };

    componentDidMount() {
        var user = this.props.user;
        if (this.props.user.role == 'lecturer') {
            user.login = this.props.user.lecturer.surname + this.props.user.lecturer.name.charAt(0) + this.props.user.lecturer.patronymic.charAt(0);
            user.sdo = Math.floor(Math.random() * (8000 - 1 + 1)) + 1;
            delete user.lecturer;
        }
        console.log(user);
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => {
            this.setState({
                isLoading: true
            });
            console.log(user);
        });
    };

    render() {
        return (
            (this.state.isLoading) ? (
                    (this.props.user.role == 'student') ?
                        <StudentForm sdo={this.props.user.sdo}/> :
                        <LectureService lecturer={this.state.lecturer}/>
                ) : (null)
        );
    };
}
;
module.exports = UserService;
