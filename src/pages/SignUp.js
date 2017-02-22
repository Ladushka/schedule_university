'use strict';
import React from 'react';
import UserType from '../components/UserType';
import SdoId from '../components/SdoId';
import Password from '../components/Password';
import FullName from '../components/FullName';
import {Page} from 'react-onsenui';
import AddUser from  '../components/AddUser';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            login: '',
            sdo_id: '',
            password: '',
            role: 'student',
            lecturer: []

        };
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
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

    handleFullNameChange(value) {
        this.setState({
            lecturer: value
        });
    };

    render() {
        return (
            <Page>
                <UserType onChange={this.handleUserTypeChange}/>
                <hr/>
                {this.state.role == 'student' ? (
                        <section style={{textAlign: 'center'}}>
                            <SdoId name={this.state.role} onChange={this.handleLoginChange}/>
                            <Password onChange={this.handlePasswordChange}/>
                            <AddUser user={this.state}/>
                        </section>
                    ) : (
                        <section style={{textAlign: 'center'}}>
                            <FullName onChange={this.handleFullNameChange}/>
                            <Password onChange={this.handlePasswordChange}/>
                            <AddUser user={this.state}/>
                        </section>
                    )
                }
            </Page>
        );
    };
}
;
module.exports = SignUp;
