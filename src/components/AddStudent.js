'use strict';
import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router'
class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit() {
        delete this.props.student.faculties;
        delete this.props.student.group_number;
        fetch('http://localhost:8080/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.student)
        })
            .catch(function (error) {
                console.log('Request failed', error)
            });
        localStorage.setItem('student', JSON.stringify(this.props.student));

        event.preventDefault();

        this.props.router.push({
            pathname: '/profile/'
        });
    };

    render() {
        return (
            <p>
                <Button className='button-request' onClick={this.handleSubmit}>Save</Button>
            </p>
        )
    }
}
;
module.exports = withRouter(AddStudent);