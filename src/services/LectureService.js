'use strict';

import React from 'react';
import {Icon, AlertDialog, Button} from 'react-onsenui';
import {withRouter} from 'react-router'

class LectureService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        console.log(this.props.lecturer);
        var lecturer = JSON.parse(JSON.stringify(this.props.lecturer));
        lecturer.login = this.props.lecturer.surname + this.props.lecturer.name.charAt(0) + this.props.lecturer.patronymic.charAt(0);
        lecturer.lecture_id = 0;
        //console.log(lecturer);
        fetch('http://localhost:8080/lecturers', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lecturer)
        })
            .then(data => {
                console.log('Request succeeded with JSON response', data);
                this.setState({
                    isLoading: true,
                    lecturer:lecturer
                });
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    handleClick() {
        localStorage.setItem('user', JSON.stringify(this.state.lecturer));
        localStorage.setItem('role', 'lecturer');
        localStorage.setItem('logged-in', true);
        this.props.router.push({
            pathname: '/signIn/' + this.state.lecturer.login
        });
    };

    render() {
        return this.state.isLoading === true ? (
                <AlertDialog
                    isOpen={true}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>All Ok!</div>
                    <div className='alert-dialog-footer'>
                        <Button onClick={this.handleClick} className='alert-dialog-button'>
                            Ok
                        </Button>
                    </div>
                </AlertDialog>
            ) : (
                <div><p>
                    <Icon style={{color: 'red'}} spin icon='md-spinner'/>
                </p></div>
            );
    }
}
;
module.exports = withRouter(LectureService);