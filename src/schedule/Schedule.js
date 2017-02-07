'use strict';
import './../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader, Row, Col,Icon} from 'react-onsenui';
const SCHEDULE = require('../data/data');

class Schedule extends React.Component {
    constructor(props) {
        super(props);
    };

    renderRow() {
        return SCHEDULE['schedule'].map(item => {
            return (
                <ListItem modifier="chevron tappable" class="plan" key={item.id}>
                    <Row>
                        <Col width="80px" class="plan-left">
                            <div className="plan-date">{item.lecture_hall}</div>
                            <div className="plan-duration">1h 20min</div>
                        </Col>

                        <Col width="6px" class="plan-center">
                        </Col>

                        <Col class="plan-right">
                            <div className="plan-name">{item.subject_name}</div>

                            <div className="plan-info">
                                <div>
                                    <Icon className="plan-icon" icon="ion-android-person"></Icon>
                                    {item.lecturer.surname}
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

    render() {
        return (

            <Page>
                <List class="plan-list">
                    {this.renderRow()}
                </List>
            </Page>
        );
    };
}
;
module.exports = Schedule;
