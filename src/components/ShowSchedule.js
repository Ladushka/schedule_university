'use strict';

import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router';

class ShowSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.showSchedule = this.showSchedule.bind(this);
    };

    showSchedule() {
        sessionStorage.setItem('day_of_week', JSON.stringify(this.props.request.day_of_week));
        if (sessionStorage.getItem('role') == 'lecturer') {
            delete this.props.request.user.faculties;
            sessionStorage.setItem('user', JSON.stringify(this.props.request.user));
        }
        this.props.router.push({
            pathname: '/scheduleContainer'
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
module.exports = withRouter(ShowSchedule);
