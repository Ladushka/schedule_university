'use strict';

import './../../www/styles/week.css';
import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router';

class RequestScheduleButton extends React.Component {
    constructor(props) {
        super(props);
        this.showSchedule = this.showSchedule.bind(this);
    };


    showSchedule() {
        sessionStorage.setItem('user', JSON.stringify(this.props.request));
        this.props.router.push({
            pathname: '/components/' + this.props.request.faculty + '/' + this.props.request.group_number
        });
    };

    render() {
        return (
            <p className="button-request">
                <Button onClick={this.showSchedule}>Show Schedule</Button>
            </p>
        );
    };

}
;
module.exports = withRouter(RequestScheduleButton);
