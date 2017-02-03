'use strict'

import './../../www/styles/week.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

class RequestScheduleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day_of_week: '',
            faculty: '',
            number: '',
            subgroup_number: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit() {
        // for (var r in this.state) {
        //     if (r !== 'day_of_week') {
        //         this.state[r] = this.props.request[r];
        //     }
        // }
        // this.props.request.number = 5;
        console.log(this.props);
    };

    render() {
        return (
            <p>
                <Button onClick={this.handleSubmit}>Show Schedule</Button>
            </p>
        );
    };

}
;
module.exports = RequestScheduleButton;
