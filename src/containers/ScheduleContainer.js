'use strict';

import React from 'react';
import ScheduleStudent from '../pages/schedule/Schedule';
import {Icon} from 'react-onsenui';

class ScheduleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: '',
            isLoading: false
        }
    };

    componentDidMount() {
        var url = localStorage.getItem('logged-in') === 'true' ? (
                localStorage.getItem('role') === 'student' ? (
                        'http://localhost:8080/lessons/faculty/' + localStorage.getItem('faculty') + '/group/' + localStorage.getItem('group')
                    ) : (
                        'http://localhost:8080/lessons/surname/' + JSON.parse(localStorage.getItem('user')).surname
                    )
            ) : (
                localStorage.getItem('role') === 'student' ? (
                        'http://localhost:8080/lessons/faculty/' + JSON.parse(sessionStorage.getItem('user')).faculty + '/group/' + JSON.parse(sessionStorage.getItem('user')).group_number
                    ) : (
                        'http://localhost:8080/lessons/surname/' + JSON.parse(sessionStorage.getItem('user')).surname
                    )
            );
        fetch(url)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                this.setState({
                    schedule: JSON.parse(text),
                    isLoading: true
                });

            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    };

    render() {
        return this.state.isLoading === true ? (
                <ScheduleStudent schedule={this.state.schedule}/>
            ) : (
                <div><p>
                    <Icon style={{color: 'red'}} spin icon='md-spinner'/>
                </p></div>
            );
    };
}
;
module.exports = ScheduleContainer;

