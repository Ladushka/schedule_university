'use strict';
import './../../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, Fab, Icon} from 'react-onsenui';
import Lesson from './components/Lesson';
import SelectorDayOfWeek from '../../components/general/SelectorDayOfWeek';
import SignOut from '../../components/general/SignOut';
import Back from '../../components/general/Back';


class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: props.schedule,
            day_of_week: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.compareLesson = this.compareLesson.bind(this);
    };

    compareLesson(lesson1, lesson2) {
        return lesson1.number_of_lesson < lesson2.number_of_lesson ? lesson1.number_of_lesson : lesson2.number_of_lesson;
    }

    renderRow(index) {
        let day_of_week, subgroup, schedule;
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
        schedule = (this.props.schedule).sort(this.compareLesson);
        return schedule.map(item => {
            if (localStorage.getItem('role') == 'student') {
                if ((day_of_week === item.day_of_week) && ((subgroup == item.subgroup) || (item.subgroup == 0))) {
                    return (
                        <section>
                            <Lesson lesson={item} index={index}/>
                        </section>
                    );
                }
            } else {
                if (day_of_week === item.day_of_week) {
                    return (
                        <section>
                            <Lesson lesson={item} index={index}/>
                        </section>
                    );
                }
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