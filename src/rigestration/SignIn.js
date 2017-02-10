'use strict';

import React from 'react';
import ons from 'onsenui';
import {Page, Toolbar, Input, Button, Dialog} from 'react-onsenui';
import {browserHistory} from 'react-router'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            dialogShown: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Sign In</div>
            </Toolbar>
        );
    };

    handleClick() {
        fetch('http://localhost:8080/users/login/' + this.state.login)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                    this.setState({dialogShown: true});
                if(this.state.password==JSON.parse(text).password){
                    ons.notification.alert({
                        message:'all ok',
                        title: 'sign in',
                        callback:function () {
                            browserHistory.push({
                                pathname: '/about'
                            });
                        }
                    });
                }else{
                    ons.notification.alert({
                        message:'your password is wrong',
                        title: 'sign in',
                        modifier: 'flat'
                    });
                }
            })
            .catch(function (error) {
                ons.notification.alert({
                    message:'your login is wrong',
                    title: 'sign in',
                    modifier: 'flat'
                });
                console.log('Request failed', error)
            });
    };

    render() {
        return (<Page renderToolbar={this.renderToolbar.bind(this)}>
            <section style={{textAlign: 'center'}}>
                <p>
                    <Input
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChange}
                        modifier='underbar'
                        float
                        placeholder='Login / Sdo_id'/>
                </p>
                <p>
                    <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        modifier='underbar'
                        type='password'
                        float
                        placeholder='Password'/>
                </p>
                <p>
                    <Button onClick={this.handleClick}>Sign in</Button>
                </p>
            </section>
        </Page>);

    };
}
;
module.exports = SignIn;