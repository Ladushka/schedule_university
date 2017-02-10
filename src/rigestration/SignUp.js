'use strict';
import React from 'react';
import UserType from './UserType';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            sdo_id: '',
            password: '',
            selectedItem: ''

        };
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    };

    handleUserTypeChange(value) {
        this.setState({
            selectedItem: value
        });
    };

    render() {
        return (
            <Page>
                <UserType onChange={this.handleUserTypeChange}/>
                {this.state.selectedItem == 'student' ? (
                        <RequestScheduleStudent />
                    ) : (
                        <RequestScheduleLecturer />
                    )}
            </Page>
        );
    };
}
;
module.exports = SignUp;
