'use strict';

import React from 'react';
import {Button, Page} from 'react-onsenui';
import {withRouter} from 'react-router';
import './../../www/styles/general.css';

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
        if (!localStorage.getItem('logged-in')) {
            localStorage.setItem('logged-in', false);
        }
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
            <Page>
                <section style={{
                    margin: 0,
                    textAlign: 'center',
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%'
                }}>
                    <Button style={{margin: '6px 40px 6px 40px', width: '70%'}} modifier='large--cta'
                            onClick={this.signIn}>
                        <div>Войти</div>
                    </Button>
                    <Button modifier='large--cta' style={{margin: '6px 40px 6px 40px', width: '70%'}}
                            onClick={this.signUp}>Зарегистрироваться</Button>
                    <Button modifier='large--cta' style={{margin: '6px 40px 6px 40px', width: '70%'}}
                            onClick={this.withoutRegistration}>Без регистрации</Button>
                </section>

            </Page>
        );
    };
}
;
module.exports = withRouter(Main);