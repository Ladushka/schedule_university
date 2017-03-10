'use strict';

import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router';
import strings from './../localization/Strings';
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
//<div>{i18next.t('test_message')}</div>
    render() {
        return (
            // <div className='main'>
                <section /*className='center'*/>
                    <Button style={{margin: '6px 40px 6px 40px', width: '60%'}} modifier='large--cta'
                            onClick={this.signIn}>
                        <div>{strings.SIGN_IN}</div>
                        </Button>
                    <Button modifier='large--cta' style={{margin: '6px 40px 6px 40px', width: '60%'}}
                            onClick={this.signUp}>Sign Up</Button>
                    <Button modifier='large--cta' style={{margin: '6px 40px 6px 40px', width: '60%'}}
                            onClick={this.withoutRegistration}>Without
                        Registration</Button>
                </section>
            // </div>
        );
    };
}
;
module.exports = withRouter(Main);