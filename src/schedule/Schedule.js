'use strict';
import './../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader, Row, Col, Icon} from 'react-onsenui';
const SCHEDULE = require('../data/data');

class Schedule extends React.Component {

    renderRow() {
        console.log(SCHEDULE['schedule']);
        return SCHEDULE['schedule'].map(item => {
            return (
                <ListItem modifier="chevron tappable" class="plan" key={item.id}>
                    <Row>
                        <Col width="80px" class="plan-left">
                            <div className="plan-date">{
                                SCHEDULE['scheduleOfCalls'].filter(lesson => {
                                    return item.number_of_lesson == lesson.number
                                })[0].time
                            }</div>
                            <div className="plan-duration">1h 20min</div>
                        </Col>

                        <Col width="6px" class="plan-center">
                        </Col>

                        <Col class="plan-right">
                            <div className="plan-name">{item.subject_name}</div>

                            <div className="plan-info">
                                <div>
                                    <Icon className="plan-icon" icon="ion-android-person"></Icon>
                                    {item.lecturer.surname} {item.lecturer.name} {item.lecturer.patronymic}
                                </div>

                                <div>
                                    <Icon className="plan-icon" icon="fa-map-marker"></Icon>
                                    {item.lecture_hall}
                                </div>
                                <div>
                                    <Icon className="plan-icon" icon="ion-ios-compose"></Icon>
                                    {item.type}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ListItem>
            );
        });
    };
//style={{width: 280 + 'px', margin: 'auto'}}
    render() {
        return (

            <Page>

                <div className="navigation-bar">
                    <div className="navigation-bar__center">
                        <div className="button-bar" style={{width:200+'px', margin: '8px auto 0'}}>
                            <div className="button-bar__item">

                                    <div className="button-bar__button">{this.props.routeParams.facultyId}</div>
                            </div>
                            <div className="button-bar__item">

                                    <div className="button-bar__button">{this.props.routeParams.groupId}</div>
                            </div>
                        </div>

                    </div>
                </div>

                <List class="plan-list">
                    {this.renderRow()}
                </List>
            </Page>
    );
    };
    }
    ;
    module.exports = Schedule;
