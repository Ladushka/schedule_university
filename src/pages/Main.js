'use strict';

import React from 'react';
import {Page, Button} from 'react-onsenui';
import {withRouter} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.withoutRegistration = this.withoutRegistration.bind(this);
    };

    componentDidMount() {
        localStorage.clear()
        sessionStorage.clear();
        localStorage.setItem('logged-in', false);
    };

    signIn() {
        this.props.router.push({
            pathname: '/signIn'
        });
    };

    signUp() {
        this.props.router.push({
            pathname: '/signUp'
        });
    };

    withoutRegistration() {
        this.props.router.push({
            pathname: '/withoutRegistration'
        });
    };

    render() {
        return (
            <Page background-image='url(./../images/fon-38805.jpg)' >
                <div className='main'>
                <section className='center'>
                    <Button style={{margin: '6px 40px 6px 40px', width: '60%'}} modifier='large--cta'
                            onClick={this.signIn}>Sign
                        In</Button>
                    <Button modifier='large--cta' style={{margin: '6px 40px 6px 40px', width: '60%'}}
                            onClick={this.signUp}>Sign Up</Button>
                    <Button modifier='large--cta' style={{margin: '6px 40px 6px 40px', width: '60%'}}
                            onClick={this.withoutRegistration}>Without
                        Registration</Button>
                </section>
                </div>
            </Page>
        );
    };
}
;
module.exports = withRouter(Main);