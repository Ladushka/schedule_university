'use strict';

import './../../www/styles/week.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

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
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                console.log('Request successful', text);
                this.state.response = text;
            })
            .catch(function (error) {
                log('Request failed', error)
            });
        event.preventDefault();
        console.log(this.state);
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
