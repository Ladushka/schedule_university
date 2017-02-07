'use strict';

import './../../www/styles/week.css';
import React from 'react';
import {Link, Router, browserHistory} from 'react-router'
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
const SCHEDULE = require('../data/data');

class RequestScheduleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleSubmit() {
        fetch('http://localhost:8080/lessons/faculty/' + this.props.request.faculty + '/group/' + this.props.request.number)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                SCHEDULE['schedule'] =JSON.parse(text);
                browserHistory.push({
                    pathname: '/schedule/' + this.props.request.faculty + '/' + this.props.request.number
                });

            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
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
