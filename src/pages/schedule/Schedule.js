'use strict';
import './../../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, Fab, Icon} from 'react-onsenui';
import {browserHistory} from 'react-router';
import Lesson from '../../components/schedule/Lesson'
import StudentHeader from './../../components/schedule/StudentHeader'
import LecturerHeader from './../../components/schedule/LecturerHeader'
import SelectorDayOfWeek from './../../components/SelectorDayOfWeek'

class ScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: props.schedule,
            day_of_week: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.renderRow = this.renderRow.bind(this);
    };


    renderRow(index) {
        let day_of_week = localStorage.getItem('logged-in') == true ? this.state.day_of_week : JSON.parse(sessionStorage.getItem('user')).day_of_week;
        return this.props.schedule.map(item => {
            if (day_of_week === item.day_of_week) {
                return (
                    <Lesson onChange={this.handleChange} lesson={item} index={index}/>
                );
            }
        });

    };

    goHome() {
        browserHistory.push({
            pathname: '/'
        });
    };

    handleChange(item) {
        this.setState({
            day_of_week: item.value
        });

    };


    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        var userName = user.surname + ' ' + user.surname.charAt(0) + '.' + user.patronymic.charAt(0) + '.';
        return (
            <Page>
                <div className="navigation-bar">
                    <div className="navigation-bar__center">
                        { localStorage.getItem('logged-in') == true ?
                            (
                                localStorage.getItem('role') === 'student' ? <StudentHeader/> :
                                    <LecturerHeader userName={userName}/>
                            ) : (
                                null
                            )
                        }
                        <SelectorDayOfWeek onChange={this.handleChange}/>
                    </div>
                </div>

                <List class="plan-list"
                      dataSource={[1]}
                      renderRow={this.renderRow}/>
                <Fab position='bottom right' className="fab" onClick={this.goHome}><Icon
                    class="zmdi zmdi-home"/></Fab>
            </Page>
        );
    };
}
;
module.exports = ScheduleStudent;
