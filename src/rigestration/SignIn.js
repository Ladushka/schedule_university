'use strict';
import React from 'react';
import UserType from './UserType';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login:'',
            sdo_id:'',
            password:''
        }
    };
    render(){
        return(
            <UserType/>
        );
    };
};
module.exports = SignIn;
