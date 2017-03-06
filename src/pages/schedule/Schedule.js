'use strict';
import './../../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, Fab, Icon} from 'react-onsenui';
import Lesson from './components/Lesson'
import StudentHeader from './components/StudentHeader'
import LecturerHeader from './components/LecturerHeader'
import SelectorDayOfWeek from './../../components/SelectorDayOfWeek'
import SignOut from './../../components/SignOut'
import Back from './../../components/Back'


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
        let day_of_week, subgroup;
        if (localStorage.getItem('logged-in') === 'true') {
            day_of_week = this.state.day_of_week;
            if (localStorage.getItem('role') == 'student') {
                subgroup = JSON.parse(localStorage.getItem('user')).subgroup;
            }
        } else {
            day_of_week = JSON.parse(sessionStorage.getItem('day_of_week'));
            if (sessionStorage.getItem('role') == 'student') {
                subgroup = sessionStorage.getItem('subgroup');
            }
        }
        
        return this.props.schedule.map(item => {
            if ((day_of_week === item.day_of_week) && ((subgroup == item.subgroup) || (item.subgroup == 0))) {
                return (
                    <Lesson lesson={item} index={index}/>
                );
            }
        });

    };

    handleChange(item) {
        this.setState({
            day_of_week: item.value
        });

    };

    render() {
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
                <Back/>
                <SignOut/>
            </Page>
        );
    };
}
;
module.exports = Schedule;