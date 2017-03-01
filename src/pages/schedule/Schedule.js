'use strict';
import './../../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, Fab, Icon} from 'react-onsenui';
import Lesson from './components/Lesson'
import StudentHeader from './components/StudentHeader'
import LecturerHeader from './components/LecturerHeader'
import SelectorDayOfWeek from './../../components/SelectorDayOfWeek'
import SignOut from './../../components/SignOut'


class Schedule extends React.Component {
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
        let day_of_week = localStorage.getItem('logged-in') === 'true' ? this.state.day_of_week : JSON.parse(sessionStorage.getItem('day_of_week'));
        return this.props.schedule.map(item => {
            if (day_of_week === item.day_of_week) {
                return (
                    <Lesson lesson={item} index={index}/>
                );
            }
        });

    };

    goHome() {
        history.back();
    };

    handleChange(item) {
        this.setState({
            day_of_week: item.value
        });

    };

    render() {
       // var user = JSON.parse(localStorage.getItem('user'));
       // var userName = user.surname + ' ' + user.surname.charAt(0) + '.' + user.patronymic.charAt(0) + '.';
        return (
            <Page>
                <div className="navigation-bar">
                    <div className="navigation-bar__center">
                        { localStorage.getItem('logged-in') == true ?
                            (
                                localStorage.getItem('role') === 'student' ? <StudentHeader/> :
                                    <LecturerHeader userName=""/>
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
                <Fab position='bottom left' onClick={this.goHome}><Icon
                    class="zmdi zmdi-home"/></Fab>
                <SignOut/>
            </Page>
        );
    };
}
;
module.exports = Schedule;