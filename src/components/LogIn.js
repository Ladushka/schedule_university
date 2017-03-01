'use strict';

import React from 'react';
import {withRouter} from 'react-router';
import {Button, AlertDialog} from 'react-onsenui';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogShown: true
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        console.log(this.props.response.login);
        if (this.props.response.logged_in === true) {
            localStorage.setItem('logged-in',true);
            this.props.router.push({
                pathname: '/signIn/' + this.props.response.login
            });
        } else {
            this.setState({
                dialogShown: false
            });
        }
    };

    render() {
        return (
            <AlertDialog
                isOpen={this.state.dialogShown}
                isCancelable={false}>
                {
                    this.props.response.logged_in === true ? (
                            <div className='alert-dialog-title'>All Ok!</div>
                        ) : (
                            <div>
                                <div className='alert-dialog-title'>Warning!</div>
                                <div className='alert-dialog-content'>Your {this.props.response.exception} is wrong!
                                </div>
                            </div>
                        )
                }
                <div className='alert-dialog-footer'>
                    <Button onClick={this.handleClick} className='alert-dialog-button'>
                        Ok
                    </Button>
                </div>
            </AlertDialog>
        );
    };
}
;
module.exports = withRouter(LogIn);
