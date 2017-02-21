'use strict';

import './../../www/styles/week.css';
import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router'
const SCHEDULE = require('../data/data');

class RequestScheduleButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit() {
        console.log(this.props.request);
        fetch('http://localhost:8080/lessons/faculty/' + this.props.request.faculty + '/group/' + this.props.request.group_number)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                SCHEDULE['schedule'] = JSON.parse(text);
                SCHEDULE['schedule'] = SCHEDULE['schedule'].filter(item => {
                    return item.day_of_week == this.props.request.day_of_week && (item.subgroup_number == this.props.request.subgroup_number || item.subgroup_number == 0);
                });
                this.props.router.push({
                    pathname: '/schedule/' + this.props.request.faculty + '/' + this.props.request.group_number
                });

            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    };

    render() {
        return (
            <p className="button-request">
                <Button onClick={this.handleSubmit}>Show Schedule</Button>
            </p>
        );
    };

}
;
module.exports = withRouter(RequestScheduleButton);
