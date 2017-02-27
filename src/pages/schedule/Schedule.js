'use strict';
import './../../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, Fab, Icon} from 'react-onsenui';
import {browserHistory} from 'react-router';
import Lesson from '../../components/schedule/Lesson'
import StudentHeader from './../../components/schedule/StudentHeader'
import LecturerHeader from './../../components/schedule/LecturerHeader'
class ScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: props.schedule
        }
    };


    renderRow(index) {
        return this.props.schedule.map(item => {
            return (
                <Lesson lesson={item} index={index}/>
            );
        });

    };

    goHome() {
        browserHistory.push({
            pathname: '/'
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
                    </div>
                </div>

                <List class="plan-list"
                      dataSource={[1]}
                      renderRow={() => this.renderRow()}/>
                <Fab position='bottom right' className="fab" onClick={this.goHome}><Icon
                    class="zmdi zmdi-home"/></Fab>
            </Page>
        );
    };
}
;
module.exports = ScheduleStudent;
