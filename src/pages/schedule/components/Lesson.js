'use strict';

import React from 'react';
import {ListItem, Row, Col, Icon} from 'react-onsenui';
const SCHEDULE = require('../../../data/data');

class Lesson extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ListItem modifier="chevron tappable" class="plan" key={this.props.index}>
                <Row>
                    <Col width="80px" class="plan-left">
                        <div className="plan-date">{
                            SCHEDULE['scheduleOfCalls'].filter(lesson => {
                                return this.props.lesson.number_of_lesson == lesson.number
                            })[0].time
                        }</div>
                        <div className="plan-duration">1h 20min</div>
                    </Col>
                    <Col width="6px" class="plan-center">

                    </Col>
                    <Col class="plan-right">
                        <div className="plan-name">{this.props.lesson.subject_name}</div>
                        <div className="plan-info">
                            <div>
                                <Icon className="plan-icon" icon="ion-android-person"/>
                                {localStorage.getItem('role') === 'student' ?
                                    this.props.lesson.lecturer.surname + ' ' + this.props.lesson.lecturer.name + ' ' + this.props.lesson.lecturer.patronymic
                                    :
                                    this.props.lesson.group.number + ', ' + this.props.lesson.group.faculty
                                }
                            </div>
                            <div>
                                <Icon className="plan-icon" icon="fa-map-marker"/>
                                {this.props.lesson.lecture_hall}
                            </div>
                            <div>
                                <Icon className="plan-icon" icon="ion-ios-compose"/>
                                {this.props.lesson.type}
                            </div>
                        </div>
                    </Col>
                </Row>
            </ListItem>
        );
    };
}
;
module.exports = Lesson;
