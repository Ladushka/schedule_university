'use strict';

import React from 'react';
import Schedule from '../pages/schedule/Schedule';
import {Icon} from 'react-onsenui';

class ScheduleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: '',
            isLoading: false,
            user: sessionStorage.getItem('user')
        }
    };

    componentDidMount() {
        var url = localStorage.getItem('logged-in') == 'true' ? (
                localStorage.getItem('role') == 'student' ? (
                        'http://localhost:8080/lessons/faculty/' + JSON.parse(localStorage.getItem('user')).group.faculty + '/group/' + JSON.parse(localStorage.getItem('user')).group.number
                    ) : (
                        'http://localhost:8080/lessons/surname/' + JSON.parse(localStorage.getItem('user')).surname
                    )
            ) : (
                sessionStorage.getItem('role') == 'student' ? (
                        'http://localhost:8080/lessons/faculty/' + sessionStorage.getItem('faculty') + '/group/' + sessionStorage.getItem('group_number')
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
                <Schedule schedule={this.state.schedule}/>
            ) : (
                <div><p>
                    <Icon style={{color: 'red'}} spin icon='md-spinner'/>
                </p></div>
            );
    };
}
;
module.exports = ScheduleContainer;

