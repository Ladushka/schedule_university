'use strict';
import React from 'react';
import {Page, Button} from 'react-onsenui';
import {withRouter} from 'react-router'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.withoutRegistration = this.withoutRegistration.bind(this);
    };

    signIn() {
        this.props.router.push({
            pathname: '/signIn'
        });
    };

    signUp() {
        this.props.router.push({
            pathname: '/sign'
        });
    };

    withoutRegistration() {
        this.props.router.push({
            pathname: '/withoutRegistration'
        });
    }

    render() {
        return (
            <Page>
                <section style={{textAlign: 'center'}}>
                    <Button modifier='large--cta' className='button-main'
                            onClick={this.signIn}>Sign
                        In</Button>
                    <Button modifier='large--cta' className='button-main'
                            onClick={this.signUp}>Sign Up</Button>
                    <Button modifier='large--cta' className='button-main'
                            onClick={this.withoutRegistration}>Without
                        Registration</Button>

                </section>
            </Page>
        );
    };
}
;
module.exports = withRouter(Main);