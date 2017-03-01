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
                        <div
                            className="card-name">Window
                        </div>
                    </Col>
                    <Col class="plan-right">

                    </Col>
                </Row>
            </ListItem>
        );
    };
}
;
module.exports = Lesson;