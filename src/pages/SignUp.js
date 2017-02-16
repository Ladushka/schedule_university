'use strict';
import React from 'react';
import UserType from '../components/UserType';
import SdoId from '../components/SdoId';
import Password from '../components/Password';
import FullName from '../components/FullName';
import {Page, Button} from 'react-onsenui';
import {browserHistory} from 'react-router'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            login: '',
            sdo_id: '',
            password: '',
            role: 'student'

        };
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUserTypeChange(value) {
        this.setState({
            role: value
        });
    };

    handleLoginChange(value) {
        this.state.role === 'student' ? (
                this.setState({
                    sdo_id: value,
                    login: value
                })
            ) : (
                this.setState({
                    login: value
                })
            )
    };

    handlePasswordChange(value) {
        this.setState({
            password: value
        });
    };

    handleSubmit() {
        console.log(this.state);

        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
        browserHistory.push({
            pathname: '/student/'+this.state.sdo_id
        });
        event.preventDefault();
    };

    render() {
        return (
            <Page>
                <UserType onChange={this.handleUserTypeChange}/>
                <hr/>

                {this.state.role == 'student' ? (
                        <section style={{textAlign: 'center'}}>
                            <SdoId name={this.state.role} onChange={this.handleLoginChange}/>
                            < Password onChange={this.handlePasswordChange}/>
                            <p>
                                <Button onClick={this.handleSubmit}>Add User</Button>
                            </p>
                        </section>
                    ) : (
                        <section style={{textAlign: 'center'}}>
                            <FullName />
                        </section>
                    )
                }

            </Page>
        );
    };
}
;
module.exports = SignUp;
