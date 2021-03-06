'use strict';

import React from 'react';
import {Page, Toolbar, Input, Button} from 'react-onsenui';
import LogInContainer from './../containers/LogInContainer';
import Password from './../components/Password';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            onClick: false
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            onClick: false
        });

    };

    handlePasswordChange(value) {
        this.setState({
            password: value
        });
    };

    renderToolbar() {
        return (
            <Toolbar position='absolute'>
                <div className='center'>Sign In</div>
            </Toolbar>
        );
    };

    handleClick() {
        this.setState({
            onClick: true
        });
    };

    render() {
        return (<Page position='relative' renderToolbar={this.renderToolbar.bind(this)}>
            <section style={{margin :0, textAlign: 'center', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%',left: '50%'}}>
                <p>
                    <Input
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChange}
                        modifier='underbar'
                        float
                        placeholder='Логин / Sdo Id'/>
                </p>
                <Password onChange={this.handlePasswordChange}/>
                <p>
                    <Button onClick={this.handleClick}>Войти</Button>
                </p>
                {this.state.onClick === true ?
                    (<LogInContainer data={this.state}/>) : (null)
                }
            </section>
        </Page>);

    };
}
;

module.exports = SignIn;