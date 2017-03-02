'use strict';

import React from 'react';
import ProfileContainer from './../containers/ProfileContainer';
import {Icon} from 'react-onsenui';
import {withRouter} from 'react-router'

class AddStudentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.student;
        this.addStudent = this.addStudent.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    addStudent() {
        fetch('http://localhost:8080/students', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(data => {
                console.log(this.state);
                console.log('Request succeeded with JSON response', data);
                this.setState({
                    isLoading: true
                });
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }

    handleClick(){
        this.props.router.push({
            pathname: '/signIn/' + this.state.sdo
        });
    };

    componentDidMount() {
        delete this.state.onClick;
        fetch('http://localhost:8080/groups/faculty/' + sessionStorage.getItem('faculty') + '/number/' + sessionStorage.getItem('group_number'))
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                this.setState({
                    group_id: JSON.parse(text).map(item => {
                        return item.group_id
                    })[0]
                });
            })
            .then(() => {
                this.addStudent();
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });

    };

    render() {
        return this.state.isLoading === true ? (
                <AlertDialog
                    isOpen={this.state.dialogShown}
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
    };

}
;
module.exports = withRouter(AddStudentContainer);