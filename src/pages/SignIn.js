'use strict';

import React from 'react';
import {Page, Toolbar, Input, Button} from 'react-onsenui';
import LogInContainer from './../containers/LogInContainer';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            onClick: false
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
        this.setState({
            onClick: true
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
                {this.state.onClick === true ?
                    (<LogInContainer data={this.state}/>) : (<div></div>)

                }
                {/*<Button onClick={this.handleClick}>Sign in</Button>*/}

            </section>
        </Page>);

    };
}
;
module.exports = SignIn;