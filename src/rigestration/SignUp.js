'use strict';
import React from 'react';
import UserType from './UserType';
import SdoId from './../general components/SdoId';
import Password from './../general components/Password';
import {Page, Button} from 'react-onsenui';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            sdo_id: '',
            password: '',
            role: 'student'

        };
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange(this);
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
                    sdo_id: value
                })
            ) : (
                this.setState({
                    login: value
                })
            )
    };

    handlePasswordChange(value) {
        console.log(value);
        this.setState({
            password: value
        });
    };

    handleSubmit() {
        console.log(this.state);
        // fetch('http://localhost:8080/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state)
        // });
        //event.preventDefault();
    };

    render() {
        return (
            <Page>
                <UserType onChange={this.handleUserTypeChange}/>
                <hr/>
                <section style={{textAlign: 'center'}}>
                    <SdoId name={this.state.role} onChange={this.handleLoginChange}/>
                    <Password password={this.handlePasswordChange}/>
                    <p>
                        <Button onClick={this.handleSubmit}>Add User</Button>
                    </p>
                </section>
            </Page>
        );
    };
}
;
module.exports = SignUp;
